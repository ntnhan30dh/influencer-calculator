import React from "react";

import { Input, Label} from "semantic-ui-react";

const InputText = (props) => {
  return (
     <div>
    <Input
      value={props.value}
      onChange={(e, { value }) => props.handleChange(value)}
    />
    </div>
  );
};

export default InputText;
