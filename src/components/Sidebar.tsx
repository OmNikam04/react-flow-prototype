import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
        {/* Logo div starts */}
        <div className="border-2 border-blue-300 h-1/6 my-1 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-blue-300 "> LOGO</h1>
        </div>
        {/* Logo div ends */}

        {/* start of sidebar nav elements */}
        <div className="border-2 border-green-600 flex-grow my-1">
          <Link to={"#"}>
            <p className="p-2 bg-slate-200 m-2 rounded">Dashboard</p>
          </Link>
          <Link to={"#"}>
            <p className="p-2 bg-slate-200 m-2 rounded">Calendar</p>
          </Link>
          <Link to={"tournament-tracking"}>
            <p className="p-2 bg-slate-200 m-2 rounded">Tournament Tracking</p>
          </Link>
          <Link to={"#"}>
            <p className="p-2 bg-slate-200 m-2 rounded">Teams</p>
          </Link>
          <Link to={"#"}>
            <p className="p-2 bg-slate-200 m-2 rounded">Messages</p>
          </Link>
        </div>
        {/* end of sidebar nav elements */}
    </>
  );
};

export default Sidebar;