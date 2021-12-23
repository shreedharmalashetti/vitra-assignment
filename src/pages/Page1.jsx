import { useState } from "react";
import people from "../store/people.json";
import MultiRangeSlider from "../components/MultiRangeSlider";

const unformatter = (str) => {
  str = str.replaceAll("$", "");
  str = str.replaceAll(",", "");
  return parseInt(str);
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});



const Person = ({ name, balance }) => {
  return (
    <div className="flex bg-green-400 text-white p-2">
      <div>{name}</div>
      <div>{balance}</div>
    </div>
  );
};

export default () => {
  const [minRange, setMinRange] = useState(1000);
  const [maxRange, setMaxRange] = useState(2000);

  const filteredPeople = people.filter((p) => {
    return (
      unformatter(p.balance) >= minRange && unformatter(p.balance) <= maxRange
    );
  });

  return (
    <div>
      <div className="sticky top-0 p-2 bg-white ">
        <MultiRangeSlider
          minChange={(v) => setMinRange(v)}
          maxChange={(v) => setMaxRange(v)}
          min="1000"
          max="4000"
          step="10"
        />
        <div className="flex justify-between">
          <div>min: {formatter.format(minRange)}</div>
          <div>max: {formatter.format(maxRange)}</div>
        </div>
      </div>

      <div className="space-y-2">
        {filteredPeople.map((p) => {
          return <Person name={p.name} balance={p.balance} key={p._id} />;
        })}
      </div>
    </div>
  );
};
