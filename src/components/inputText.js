import React from "react";

import { Input} from "semantic-ui-react";

const InputText = (props) => {
  return (
     <div>
    <Input
      value={props.value}
      onChange={(e, { value }) => props.handleChange(value)}
      fluid
    />
    </div>
  );
};

export default InputText;
