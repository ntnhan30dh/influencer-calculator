import React from "react";

import { Label } from "semantic-ui-react";

const Error = (props) => {
  return (
    props.isChecking &&
    !props.value && (
      <Label basic color="red" pointing="above">
        Please enter {props.label}
      </Label>
    )
  );
};

export default Error;
