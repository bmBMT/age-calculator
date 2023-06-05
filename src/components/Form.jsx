import React from "react";
import Label from "./UI/Label/Label";
import Input from "./UI/Input/Input";
import FormItem from "./FormItem";

const Form = ({ ref, day, setDay, month, setMonth, year, setYear }) => {
  const formDatas = [
    { title: "day", val: day, setVal: setDay },
    { title: "month", val: month, setVal: setMonth },
    { title: "year", val: year, setVal: setYear },
  ];

  return (
    <form
      style={{
        display: "flex",
        gap: 24,
        flexWrap: 'wrap'
      }}
    >
      {formDatas.map((data, i) => (
        <FormItem
          key={i}
          title={data.title}
          val={data.val}
          setVal={data.setVal}
        />
      ))}
    </form>
  );
};

export default Form;
