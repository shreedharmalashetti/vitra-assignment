import people from "../store/people.json";

const unformatter = (str) => {
  str = str.replaceAll("$", "");
  str = str.replaceAll(",", "");
  return parseInt(str);
};

const Friends = ({ friends }) => {
  return (
    <div className="space-y-1">
      {friends.map((f) => {
        return <div key={f.id}>{f.name}</div>;
      })}
    </div>
  );
};

const Person = ({ name, friends }) => {
  return (
    <div className="bg-green-300">
      <div>name: {name}</div>
      <div>
        <div>friends</div>
        <Friends friends={friends} />
      </div>
    </div>
  );
};

export default () => {
  const filteredPeople = people.filter((p) => {
    return p.isActive == false && unformatter(p.balance) < 2000;
  });

  return (
    <div>
      <div className="p-4">people with Balance is less than $2000 and who are not active</div>
      <div className="space-y-4">
        {filteredPeople.map((p) => {
          return <Person name={p.name} friends={p.friends} key={p._id} />;
        })}
      </div>
    </div>
  );
};
