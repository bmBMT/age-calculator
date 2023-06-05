import React from "react";

const Label = ({ title }) => {
  const _title = title.toUpperCase();
  return <label style={{ color: "gray", fontWeight: 'bold', fontSize: '14px' }}>{_title}</label>;
};

export default Label;
