import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <h2 className="text-4xl text-center text-amber-200">
        The content you are looking for is not available
      </h2>
      <h3 className="text-2xl text-center text-amber-200">
        {" "}
        {error.statusText || error.message}
      </h3>
      <button className="btn btn-info btn-wide" onClick={handleGoBack}>
        Go back
      </button>
      <Link className="btn btn-circle" to={"/"}>Home</Link>
    </div>
  );
};

export default Error;
