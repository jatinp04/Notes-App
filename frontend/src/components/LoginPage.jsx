import { React, useState } from "react";
import axios from "../Api";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function setLogin(e) {
    console.log("Check!");
    e.preventDefault(); //Prevent Reloading
    axios
      .post("/login", {
        email: email,
        password: password,
      },{withCredentials:true})
      .then((response) => {
        if (response.status === 200) {
          //Redirect to Home
          navigate("/");
        }
      })
      .catch((Err) => {
        if (Err) {
          alert("Invalid Credentials!");
        }
      });
  }
  return (
    <>
      <div className="center">
        <h1>Login</h1>
        <form method="post">
          <div className="txt_field">
            <input
              type="text"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>

            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>

            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          {/* <input  value="Login"  onClick={setLogin}></input> */}
          <button className="submit" onClick={setLogin}>Submit</button>
          <div className="signup_link">
            Not a member? <a href="/signup">Signup</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
