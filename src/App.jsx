import React, { useEffect, useState } from "react";
import "./styles/index.css";
import { getFullAge } from "./utils/getFullAge";
import { useInput } from "./hooks/useInput";
import Form from "./components/Form";
import AgeLayot from "./components/AgeLayot";
import AgeHide from "./components/AgeHide";

const App = () => {
  const [day, setDay] = useInput(0);
  const [month, setMonth] = useInput(1);
  const [year, setYear] = useInput(2000);
  const [age, setAge] = useState({});
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setAge(getFullAge(day, month, year));
  }, [day, month, year]);

  function changeHidden() {
    setHide(!hide);
  }

  let windowWidth = window.innerWidth;
  let hidden = windowWidth > 425 ? 200 : 400;
  let visible = windowWidth > 425 ? 500 : 700;

  return (
    <div className="app" style={{ maxHeight: hide ? hidden : visible }}>
      <Form
        day={day}
        setDay={setDay}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
      />
      <AgeHide hide={hide} onClick={changeHidden} />
      <AgeLayot age={age} />
    </div>
  );
};

export default App;
