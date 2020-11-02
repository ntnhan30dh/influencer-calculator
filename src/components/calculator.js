import React, { useState, useEffect } from "react";
import { Dropdown, Input, Label } from "semantic-ui-react";

import Select from "../constants/select";

const Calculator = () => {
  const select = new Select();

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

  let cost = 0;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
  return (
    <div>
      <h1>Calculator</h1>
      <h3> Category</h3>
      <h4>{category}</h4>
      <Dropdown
        placeholder="Select Category"
        // fluid
        search
        selection
        options={select.categories()}
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
        options={select.prominences()}
        onChange={(e, { value }) => setProminence(value)}
      />
      {/* {!prominence && (
        <Label style={{ color: "red" }} basic color="red" pointing="left">
          please choose Payment model
        </Label>
      )} */}

      <h3>Influencer name</h3>
      <h4>{influencerName}</h4>
      <Input onChange={(e, { value }) => setInfluencerName(value)} />

      <h3>Link to social media account</h3>
      <h4>{link}</h4>
      <Input onChange={(e, { value }) => setLink(value)} />

      <h3>Followers</h3>
      <h4>{followers}</h4>
      <Input onChange={(e, { value }) => setFollowers(value)} />
      {!/^\d+$/.test(followers) && followers && (
        <Label basic color="red" pointing="left">
          Please enter a number
        </Label>
      )}

      <h3>AVG ENG</h3>
      <h4>{eng}</h4>
      <Input onChange={(e, { value }) => setEng(value)} />

      <h3>AVG IMP</h3>
      <h4>{imp}</h4>
      <Input onChange={(e, { value }) => setImp(value)} />

      <h3>Audience fit (%)</h3>
      <h4>{audienceFit}</h4>
      <Input onChange={(e, { value }) => setAudienceFit(value)} />
      {!/^[0-9.]*$/.test(audienceFit) && audienceFit && (
        <Label basic color="red" pointing="left">
          Please enter a number
        </Label>
      )}

      <h3>Target group accuracy</h3>
      <h4>{targetGroup}</h4>
      <Input onChange={(e, { value }) => setTargetGroup(value)} />


      <h3>Brand fit</h3>
      <h4>{brandFit}</h4>
      <Input onChange={(e, { value }) => setBrandFit(value)} />
      {/^[0-9.]*$/.test(brandFit)&&(parseFloat(brandFit)>1.5 || (parseFloat(brandFit)<0.5)) && brandFit && (
        <Label basic color="red" pointing="left">
        0.5 to 1.5
        </Label>
      )}
      {!/^[0-9.]*$/.test(brandFit)&& brandFit && (
        <Label basic color="red" pointing="left">
          Please enter a number
        </Label>
      )}

      <h3>Content value </h3>
      <h4>{contentValue}</h4>
      <Dropdown
        placeholder="Influencer prominence"
        // fluid
        selection
        options={select.contentValues()}
        onChange={(e, { value }) => setContentValue(value)}
      />

      <h2>
        Estimated cost: {platform && prominence && formatter.format(cost)}
      </h2>
    </div>
  );
};

export default Calculator;
