import React, { useState } from "react";
import { Form, Dropdown, Input, Label, Radio } from "semantic-ui-react";
import { StickyTable, Row, Cell } from "react-sticky-table";
import CountryList from "../constants/countryList";

import Select from "../constants/select";

const Calculator = () => {
  const select = new Select();
  const countryList = new CountryList();

  let [category, setCategory] = useState(undefined);
  let [platform, setPlatform] = useState(undefined);
  let [prominence, setProminence] = useState(undefined);
  let [influencerName, setInfluencerName] = useState(undefined);
  let [link, setLink] = useState(undefined);
  let [followers, setFollowers] = useState(undefined);
  let [eng, setEng] = useState(undefined);
  let [imp, setImp] = useState(undefined);
  let [audienceFit, setAudienceFit] = useState(undefined);
  let [targetGroup, setTargetGroup] = useState(undefined);
  let [brandFit, setBrandFit] = useState(undefined);
  let [contentValue, setContentValue] = useState(undefined);
  let [type, setType] = useState(undefined);
  let [influencerValue, setInfluencerValue] = useState(undefined);
  let [country, setCountry] = useState(undefined);
  let [influencerArr, setInfluencerArr] = useState([]);

  let influencerValueRes =
    type === "existing" ? influencerValue : (imp - eng) * 0.001 * 1 + eng * 0.2;

  let price =
    influencerValueRes * audienceFit * targetGroup * brandFit + contentValue;
  // const formatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "EUR",
  //   minimumFractionDigits: 2,
  // });
  const handleInfulencerValue = (value) => {
    // let res=undefined
    // if (type === "new") {
    //    res = (imp - eng) * 0.001 * 1 + eng * 0.2;
    //    setInfluencerValue(res);
    // }else
    setInfluencerValue(value);
  };
  const addInfluencer = () => {
    // handleInfulencerValue();
    let res = [...influencerArr];
    res.push({
      name: influencerName,
      link: link,
      followers: followers,
      category: category,
      platform: platform,
      prominence: prominence,
      price: price,
      id: influencerName + price + platform,
    });
    setInfluencerArr(res);
    // console.log("addInfluencer is called", influencerArr)
  };

  const handleRemove = (id) => {
    const newList = influencerArr.filter((item) => item.id !== id);
    setInfluencerArr(newList);
  };

  const handleReset = () => {
    setCategory("");
    setPlatform("");
    setProminence("");
    setInfluencerName("");
    setLink("");
    setFollowers("");
    setEng("");
    setImp("");
    setAudienceFit("");
    setTargetGroup("");
    setBrandFit("");
    setContentValue("");
    setType("");
    setInfluencerValue("");
    setCountry("");
    setInfluencerArr([]);
  };
  return (
    <div className="wrapper">
      <div className="col1">
        <h3>Influencer name</h3>
        <h4>{influencerName}</h4>
        <Input
          value={influencerName}
          onChange={(e, { value }) => setInfluencerName(value)}
        />

        <h3> Social Media Link</h3>
        <h4>{link}</h4>
        <Input  type="url" value={link} onChange={(e, { value }) => setLink(value)} />

        <h3>Followers</h3>
        <h4>{followers}</h4>
        <Input
          value={followers}
          type="number"
          onChange={(e, { value }) => value >= 0 ?setFollowers(value):setFollowers("")}
        />
        {!/^\d+$/.test(followers) && followers && (
          <Label basic color="red" pointing="left">
            Please enter a number
          </Label>
        )}
      </div>

      <div className="col2">
        <h3> Category</h3>
        <h4>{category}</h4>
        <Dropdown
          placeholder="Select Category"
          // fluid
          search
          selection
          options={select.categories()}
          value={category}
          onChange={(e, { value }) => setCategory(value)}
        />
        {/* {!category && (
        <Label style={{ color: "red" }} basic color="red" pointing="left">
          please choose category
        </Label>
      )} */}
        <h3>Platform</h3>
        <h4>{platform}</h4>

        <Dropdown
          placeholder="Select platform"
          // fluid
          search
          selection
          options={select.platforms()}
          onChange={(e, { value }) => setPlatform(value)}
          value={platform}
        />
        {/* {category && !platform && (
        <Label style={{ color: "red" }} basic color="red" pointing="left">
          please choose platform
        </Label>
      )} */}
        <h3>Influencer prominence</h3>
        <h4>{prominence}</h4>
        <Dropdown
          placeholder="Influencer prominence"
          // fluid
          selection
          value={prominence}
          options={select.prominences()}
          onChange={(e, { value }) => setProminence(value)}
        />
        {/* {!prominence && (
        <Label style={{ color: "red" }} basic color="red" pointing="left">
          please choose Payment model
        </Label>
      )} */}
      </div>
      <div className="col3">
        <h3>Audience fit (%)</h3>
        <h4>{audienceFit}</h4>
        <Input
          type="number"
          value={audienceFit}
          onChange={(e, { value }) => setAudienceFit(value)}
        />
        {!/^[0-9.]*$/.test(audienceFit) && audienceFit && (
          <Label basic color="red" pointing="left">
            Please enter a number
          </Label>
        )}

        <h3>Target group accuracy</h3>
        <h4>{targetGroup}</h4>
        <Input
          value={targetGroup}
          type="number"
          onChange={(e, { value }) => setTargetGroup(value)}
        />

        <h3>Brand fit</h3>
        <h4>{brandFit}</h4>
        <Input
          value={brandFit}
          type="number"
          onChange={(e, { value }) => setBrandFit(value)}
        />
        {/^[0-9.]*$/.test(brandFit) &&
          (parseFloat(brandFit) > 1.5 || parseFloat(brandFit) < 0.5) &&
          brandFit && (
            <Label basic color="red" pointing="left">
              0.5 to 1.5
            </Label>
          )}
        {!/^[0-9.]*$/.test(brandFit) && brandFit && (
          <Label basic color="red" pointing="left">
            Please enter a number
          </Label>
        )}

        <h3>Content value </h3>
        <h4>{contentValue}</h4>
        <Dropdown
          placeholder="Influencer prominence"
          // fluid
          value={contentValue}
          selection
          options={select.contentValues()}
          onChange={(e, { value }) => setContentValue(value)}
        />
      </div>
      <div>
        <h3>Influencer type</h3>
        <h4>{influencerValue}</h4>
        <Form.Field>
          <Radio
            // className={adFormat === 1 ? "active" : ""}
            label="New"
            name="radioGroup1"
            value="new"
            checked={type === "new"}
            onChange={(e, { value }) => setType(value)}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            //className={adFormat === 0.8 ? "active" : ""}
            label="Existing"
            name="radioGroup1"
            value="existing"
            checked={type === "existing"}
            onChange={(e, { value }) => setType(value)}
          />
        </Form.Field>
        {type === "new" && (
          <div>
            <h3>AVG ENG</h3>
            <h4>{eng}</h4>
            <Input
              value={eng}
              type="number"
              onChange={(e, { value }) => setEng(value)}
            />
            <h3>AVG IMP</h3>
            <h4>{imp}</h4>
            <Input
              value={imp}
              type="number"
              onChange={(e, { value }) => setImp(value)}
            />
            <h3>Country</h3>
            <h4>{country}</h4>
            <Dropdown
              placeholder="Select Country"
              fluid
              search
              selection
              options={countryList.countries("Asia")}
              onChange={(e, { value }) => setCountry(value)}
              defaultValue={country}
              value={country}
            />
          </div>
        )}
        {type === "existing" && (
          <div>
            {" "}
            <h3>Influencer Value</h3>
            <h4>{influencerValue}</h4>
            <Input
              value={influencerValue}
              type="number"
              onChange={(e, { value }) => handleInfulencerValue(value)}
            />
          </div>
        )}
        <a
          href="https://app.neoreach.com/login#/influencers"
          rel="noopener noreferrer"
          target="_blank"
        >
          Neoreach{" "}
        </a>
        <br />
        <a
          href="https://docs.google.com/spreadsheets/d/1OrpxdBYUaqlp3n8rTocEWd7wdJdqVpolINF-WQwPI4I/edit#gid=720570734"
          rel="noopener noreferrer"
          target="_blank"
        >
          sheet{" "}
        </a>
        <br />
        <a
          href="https://docs.google.com/document/d/1Ydm_yeDd0ZQnqyGWKY-ugseW13If_ZI1L1GonKMpAI0"
          rel="noopener noreferrer"
          target="_blank"
        >
          Guide{" "}
        </a>
      </div>

      <div>
        <button onClick={addInfluencer}>Add influencer</button>
      </div>

      <div className="table">
        <div style={{ width: "100%", height: "400px" }}>
          <StickyTable>
            <Row>
              <Cell>name</Cell>
              <Cell>link</Cell>
              <Cell>followers</Cell>
              <Cell>category</Cell>
              <Cell>platform</Cell>
              <Cell>prominence</Cell>
              <Cell>Estimated price</Cell>
            </Row>
            {influencerArr.map((item) => (
              <Row>
                <Cell>{item.name}</Cell>
                <Cell>{item.link}</Cell>
                <Cell>{item.followers}</Cell>
                <Cell>{item.category}</Cell>
                <Cell>{item.platform}</Cell>
                <Cell>{item.prominence}</Cell>
                <Cell>{item.price}</Cell>
                {/* <Cell>{item.id}</Cell> */}
                <Cell>
                  {" "}
                  <button type="button" onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>
                </Cell>
              </Row>
            ))}
          </StickyTable>
        </div>
      </div>
      <div className="resetButton">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Calculator;
