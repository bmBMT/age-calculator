import { useState } from "react";

export function useInput(initialValue) {
  const [val, setVal] = useState(initialValue);

  function onChange(event) {
    setVal(Number(event.target.value));
  }

  return [val, onChange];
}