import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <div>home page</div>
      <div className="space-x-4">
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>
      </div>
    </div>
  );
};
