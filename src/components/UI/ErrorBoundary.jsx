import { useRouteError, Link } from "react-router-dom";
import ErrorImage from "../../assets/svg/error.svg";
import Button from "./Button";
export default function ErrorBoundary() {
  const error = useRouteError();
  console.log(error.data);
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col">
      <div>
        <img src={ErrorImage} alt="" height={300} width={300} />
      </div>
      <p>{error.data}</p>
<Link to={"/dashboard/overview"} className="mt-4"><Button value={"Dashboard"}/></Link>
    </div>
  );
}
