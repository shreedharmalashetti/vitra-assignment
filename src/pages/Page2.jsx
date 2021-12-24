import people from "../store/people.json";
import { unformatter } from "../utils";

const Friends = ({ friends }) => {
  return (
    <div className="flex flex-col items-center justify-between space-y-2 ">
      <div className="text-md font-semibold underline  text-indigo-500">Friends</div>
      <div>
        {friends.map((f) => {
          return (
            <div key={f.id} className="text-yellow-600 text-md font-md">
              {f.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Person = ({ name, balance, friends }) => {
  return (
    <div className="flex justify-between shadow-inner bg-light-500 p-2">
      <div className="space-y-2">
        <div className="text-md font-semibold underline text-indigo-500">Person</div>
        <div>
          <div className="text-xl font-md">{name}</div>
          <div className="text-red-500">{balance}</div>
        </div>
      </div>
      <Friends friends={friends} />
    </div>
  );
};

export default () => {
  const filteredPeople = people.filter((p) => {
    return p.isActive == false && unformatter(p.balance) < 2000;
  });

  return (
    <div className="container mx-auto max-w-2xl">
      <div className="space-y-4 ">
        {filteredPeople.map((p) => {
          return (
            <Person
              name={p.name}
              balance={p.balance}
              friends={p.friends}
              key={p._id}
            />
          );
        })}
      </div>
    </div>
  );
};
