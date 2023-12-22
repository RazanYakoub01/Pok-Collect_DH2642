import React from "react";
import "/src/css/login.css";
import hm4 from "/src/assets/homepageImages/hm4.png";
import "/src/css/textFonts.css";

export default function LoginView(props) {
  const fireGoogleSignIn = (event) => {
    props.onGoogleSignIn(event);
  };

  return (
    <div>
      <h1>Login to your account </h1>
      <div>
      <div>
        <p>
          Please login in order to use our store and see your personal
          collection
        </p>
      </div>
        <div className="button-container">
          <button className="googleButton" onClick={fireGoogleSignIn}>
            Sign in with Google
          </button>
        </div>
      </div>
      <div>
        <img className="homeImg" src={hm4}></img>
      </div>
    </div>
  );
}
