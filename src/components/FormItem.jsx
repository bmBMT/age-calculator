import React from "react";
import Label from "./UI/Label/Label";
import Input from "./UI/Input/Input";

const FormItem = ({ title, val, setVal }) => {
  return (
    <div className="bind">
      <Label title={title} />
      <Input value={val} onChange={setVal} />
    </div>
  );
};

export default FormItem;
