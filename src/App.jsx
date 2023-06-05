import React, { useEffect, useState } from "react";
import "./styles/index.css";
import { ageCalculate } from "./utils/ageCalculate";
import { useInput } from "./hooks/useInput";
import Form from "./components/Form";
import AgeLayot from "./components/AgeLayot";
import AgeHide from "./components/AgeHide";

const App = () => {
  const [currentDate, setCurrentDate] = useState({});
  const [day, setDay] = useInput(0);
  const [month, setMonth] = useInput(1);
  const [year, setYear] = useInput(2000);
  const [age, setAge] = useState({});
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setAge(ageCalculate(day, month, year));
  }, [currentDate, day, month, year]);

  function changeHidden() {
    setHide(!hide);
  }

  return (
    <div className="app" style={{ maxHeight: hide ? 200 : 500 }}>
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
