import React from "react";

import { Input } from "semantic-ui-react";

const InputText = (props) => {
  return (
    <Input
      value={props.value}
      onChange={(e, { value }) => props.handleChange(value)}
    />
  );
};

export default InputText;
