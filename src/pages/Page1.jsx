import { useState } from "react";
import people from "../store/people.json";
import MultiRangeSlider from "../components/MultiRangeSlider/index";
import { unformatter, formatter } from "../utils";

const Person = ({ name, balance, email, phone }) => {
  return (
    <div className="bg-light-200 shadow-lg flex justify-between items-center p-2">
      <div>
        <div className="text-xl font-md pb-1">{name}</div>
        <div className="text-sm">{phone}</div>
        <div className="text-sm">{email}</div>
      </div>
      <div>
        <div className="text-md font-semibold">{balance}</div>
      </div>
    </div>
  );
};

export default () => {
  const [minRange, setMinRange] = useState(1000);
  const [maxRange, setMaxRange] = useState(4000);

  const filteredPeople = people.filter((p) => {
    return (
      unformatter(p.balance) >= minRange && unformatter(p.balance) <= maxRange
    );
  });

  return (
    <div className="container mx-auto max-w-2xl p-2">
      <div className="sticky top-0 px-2 bg-white">
        <MultiRangeSlider
          min={1000}
          max={4000}
          onChange={({ min, max }) => {
            setMinRange(min);
            setMaxRange(max);
          }}
        />
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <div>Min: </div>
            <div className="text-green-500 font-md">
              {formatter.format(minRange)}
            </div>
          </div>
          <div className="flex space-x-2">
            <div>Max: </div>
            <div className="text-green-500 font-md">
              {formatter.format(maxRange)}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-2">
        {filteredPeople.map((p) => {
          return (
            <Person
              name={p.name}
              balance={p.balance}
              email={p.email}
              phone={p.phone}
              key={p._id}
            />
          );
        })}
      </div>
    </div>
  );
};
