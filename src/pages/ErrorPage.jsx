import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <h1>Oops! Looks like something went wrong.</h1>
      {error && (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </>
  );
}

export default ErrorPage;
