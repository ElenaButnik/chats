import { useState } from "react";
import { ReactComponent as GoogleIcon } from "../assets/google-icon.svg";

export default function Google() {
  const url = process.env.REACT_APP_API_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div className="google__container">
      <a className="google__link"
        href={`${url}/auth/google`}
        disabled={isLoading}
        onClick={toggleLoading}
      >
        <GoogleIcon /> log in with Google
      </a>
     
    </div>
  );
}
