import { Link } from "react-router-dom";

export default () => {
  return (
    <div className=" space-y-4">
      <h1 className="text-center text-3xl font-medium  p-2">home page</h1>
      <div className="space-y-2">
        <h2 className="text-2xl">assignment:</h2>
        <p>
          Page 1 : The UI should have a Slider (range $1000 to $4000). Depending
          on the range I select in the slider, it should display a list of
          people whose Balance is in that range.
        </p>
        <p>
          Page 2 : Show a list of friends for people who are not active
          (isActive: false) and whose Balance is less than $2000.
        </p>
      </div>

      <div className="flex justify-center space-x-6">
        <Link to="/page1" className="text-xl text-indigo-500">
          page1
        </Link>
        <Link to="/page2" className="text-xl text-indigo-500">
          page2
        </Link>
      </div>
    </div>
  );
};
