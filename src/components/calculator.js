import React, { useState, useEffect } from "react";
import { Form, Dropdown, Label, Radio, Modal, Button } from "semantic-ui-react";
import CountryList from "../constants/countryList";
import Select from "../constants/select";
import Table from "./table";
import ExportExcel from "./exportExcel";
import InputText from "./inputText";
import InputNumber from "./inputNumber";
import Error from "./error";

const Calculator = () => {
  const select = new Select();
  const countryList = new CountryList();

  let [influencerName, setInfluencerName] = useState(undefined);
  let [link, setLink] = useState(undefined);
  let [category, setCategory] = useState(undefined);
  let [platform, setPlatform] = useState(undefined);
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
  let [open, setOpen] = React.useState(false);
  let [isChecking, setIsChecking] = useState(undefined);
  let [chosenID, setChosenID] = useState(undefined);
  let [updateMode, setUpdateMode] = useState(false);
  let prominence =
    followers && country && countryList.prominence(country, followers);
  let cpm = followers && country && countryList.cpm(country, followers);
  let influencerValueRes =
    type === "existing"
      ? influencerValue
      : (imp - eng) * 0.001 * cpm + eng * 0.2;

  let price =
    influencerValueRes *
      (audienceFit * 0.01) *
      (targetGroup * 0.01) *
      brandFit +
    contentValue;

  useEffect(() => {
    if (!open) {
      setUpdateMode(false);
      reset();
    }
  }, [open]);

  const addInfluencer = () => {
    let res = [...influencerArr];
    res.push({
      id: influencerName + Date.now(),
      name: influencerName,
      link: link,
      followers: followers,
      category: category,
      platform: platform,
      prominence: prominence,
      price: price,
      eng: eng,
      imp: eng,
      audienceFit: audienceFit,
      targetGroup: targetGroup,
      brandFit: brandFit,
      contentValue: contentValue,
      type: type,
      influencerValue: influencerValue,
      country: country,
    });
    setInfluencerArr(res);
    setOpen(false);
    // console.log("res", res);
  };
  const handelChangeInfluencer = (mode) => {
    let callBack = mode==="add"?addInfluencer:updateInfluencer;
    setIsChecking(true);
    if (type === "existing") {
      brandFit &&
        targetGroup & audienceFit &&
        country &&
        link &&
        influencerName &&
        category &&
        platform &&
        followers &&
        type &&
        influencerValue &&
        callBack();
    } else {
        brandFit &&
        targetGroup & audienceFit &&
        country &&
        link &&
        influencerName &&
        category &&
        platform &&
        followers &&
        type &&
        eng &&
        imp &&
        callBack();
    }
  };
  const handleRemove = (id) => {
    const newList = influencerArr.filter((item) => item.id !== id);
    setInfluencerArr(newList);
  };

  const handleEdit = (id) => {
    setUpdateMode(true);
    setOpen(true);
    setChosenID(id);
    const chosenInf = influencerArr.filter((item) => item.id === id);
    setInfluencerName(chosenInf[0].name);
    setCategory(chosenInf[0].category);
    setPlatform(chosenInf[0].platform);
    // setProminence("");
    setLink(chosenInf[0].link);
    setFollowers(chosenInf[0].followers);
    setEng(chosenInf[0].eng);
    setImp(chosenInf[0].imp);
    setAudienceFit(chosenInf[0].audienceFit);
    setTargetGroup(chosenInf[0].targetGroup);
    setBrandFit(chosenInf[0].brandFit);
    setContentValue(chosenInf[0].contentValue);
    setType(chosenInf[0].type);
    setInfluencerValue(chosenInf[0].influencerValue);
    setCountry(chosenInf[0].country);
  };

  const updateInfluencer = () => {
    const newTodos = [...influencerArr];
    let index = newTodos.findIndex((item) => item.id === chosenID);
    newTodos[index]["name"] = influencerName;
    newTodos[index]["category"] = category;
    newTodos[index]["platform"] = platform;
    newTodos[index]["link"] = link;
    newTodos[index]["followers"] = followers;
    newTodos[index]["eng"] = eng;
    newTodos[index]["imp"] = imp;
    newTodos[index]["audienceFit"] = audienceFit;
    newTodos[index]["targetGroup"] = targetGroup;
    newTodos[index]["brandFit"] = brandFit;
    newTodos[index]["contentValue"] = contentValue;
    newTodos[index]["type"] = type;
    newTodos[index]["influencerValue"] = influencerValue;
    newTodos[index]["country"] = country;
    newTodos[index]["prominence"] = prominence;
    newTodos[index]["price"] = price;
    setInfluencerArr(newTodos);
    setUpdateMode(false);
    setOpen(false);
   // console.log("followers",followers)
    // console.log("newTodos",newTodos)
  };
  const handleReset = () => {
    reset();
    setInfluencerArr([]);
  };
  const reset = () => {
    setCategory("");
    setPlatform("");
    // setProminence("");
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
    setIsChecking(false);
  };
  return (
    <div className="contentWrapper">
      <div className="controlField">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button className="addInfluencerBtn">Add influencer</Button>}
        fluid
        size="large"
      >
        <div className="modalWrapper">
          <div>
            <h3>Influencer name</h3>
            <h4>{influencerName}</h4>
            <InputText
              value={influencerName}
              handleChange={setInfluencerName}
            />
            <Error
              value={influencerName}
              isChecking={isChecking}
              label={" Influencer name"}
            />

            <h3> Social Media Link</h3>
            <h4>{link}</h4>
            <InputText value={link} handleChange={setLink} />
            <Error
              value={link}
              isChecking={isChecking}
              label={" Social Media Link"}
            />

            <h3>Followers</h3>
            {/* <h4>{followers}</h4> */}
            <InputNumber value={followers} handleChange={setFollowers} />
            <Error
              value={followers}
              isChecking={isChecking}
              label={" Followers"}
            />
          </div>
          <div>
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
            <Error
              value={category}
              isChecking={isChecking}
              label={"Category"}
            />

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
            <Error
              value={platform}
              isChecking={isChecking}
              label={" Platform"}
            />

            <h3>Country</h3>
            {/* <h4>{country}</h4> */}
            <Dropdown
              placeholder="Select Country"
              //fluid
              search
              selection
              options={countryList.countries()}
              onChange={(e, { value }) => setCountry(value)}
              // defaultValue={country}
              value={country}
            />
            <Error value={country} isChecking={isChecking} label={" Country"} />

            {/* 
            <h3>Influencer prominence: {prominence} </h3>
            <h3>CPM: {cpm} </h3> */}
          </div>

          <div>
            <h3>Audience fit (%)</h3>
            {/* <h4>{audienceFit}</h4> */}
            <InputNumber value={audienceFit} handleChange={setAudienceFit} />
            <Error
              value={audienceFit}
              isChecking={isChecking}
              label={" Audience fit "}
            />

            <h3>Target group accuracy (%)</h3>
            {/* <h4>{targetGroup}</h4> */}
            <InputNumber value={targetGroup} handleChange={setTargetGroup} />
            <Error
              value={targetGroup}
              isChecking={isChecking}
              label={" Target group accuracy "}
            />

            <h3>Brand fit </h3>
            <p>on a scale of 0.5 to 1.5</p>
            {/* <h4>{brandFit}</h4> */}
            <InputNumber value={brandFit} handleChange={setBrandFit} />
            <Error
              value={brandFit}
              isChecking={isChecking}
              label={" Brand fit"}
            />

            {/^[0-9.]*$/.test(brandFit) &&
              (parseFloat(brandFit) > 1.5 || parseFloat(brandFit) < 0.5) &&
              brandFit && (
                <Label basic color="red" pointing="left">
                  0.5 to 1.5
                </Label>
              )}

            <h3>Content value </h3>
            {/* <h4>{contentValue}</h4> */}
            <Dropdown
              placeholder="Influencer prominence"
              // fluid
              value={contentValue}
              selection
              options={select.contentValues()}
              onChange={(e, { value }) => setContentValue(value)}
            />
            <Error
              value={contentValue}
              isChecking={isChecking}
              label={" Content value"}
            />
          </div>
          <div>
            <h3>Influencer type</h3>
            {/* <h4>{influencerValueRes}</h4> */}
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
            <Error
              value={type}
              isChecking={isChecking}
              label={" Influencer type"}
            />

            {type === "new" && (
              <div>
                <h3>AVG ENG</h3>
                <h4>{eng}</h4>
                <InputNumber value={eng} handleChange={setEng} />
                <Error value={eng} isChecking={isChecking} label={" AVG ENG"} />

                <h3>AVG IMP</h3>
                <h4>{imp}</h4>
                <InputNumber value={imp} handleChange={setImp} />
                <Error value={imp} isChecking={isChecking} label={" AVG IMP"} />
              </div>
            )}
            {type === "existing" && (
              <div>
                {" "}
                <h3>Influencer Value</h3>
                <h4>{influencerValue}</h4>
                <InputNumber
                  value={influencerValue}
                  handleChange={setInfluencerValue}
                />
                <Error
                  value={influencerValue}
                  isChecking={isChecking}
                  label={" Influencer Value"}
                />
              </div>
            )}
          </div>
          <div>
            {/* <h3>influencerValueRes: {influencerValueRes}</h3> */}
            {/* <h3>price:{price}</h3> */}

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
              Neoreach usernames and passwords{" "}
            </a>
            <br />
            <a
              href="https://docs.google.com/document/d/1xq-P39hrYsWgmfZr6Nmrs58HAD7y6H_qxeULwRgrjMs"
              rel="noopener noreferrer"
              target="_blank"
            >
              where to find information
            </a>
          </div>

          <div>
            {updateMode ? (
              <button onClick={()=>handelChangeInfluencer("update")}>Update </button>
            ) : (
              <button onClick={()=>handelChangeInfluencer("add")}>Add </button>
            )}
          </div>
        </div>
      </Modal>
      <div className="bottom">
      <div className="resetButton">
        <Button onClick={handleReset}>Reset</Button>
      </div>
      <ExportExcel influencerArr={influencerArr} />
      </div>
        
      </div>
      <Table
        influencerArr={influencerArr}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Calculator;
