import { useState } from "react";
import "bulma/css/bulma.css";
import "../css/loginPageStyles.css";
import { CreateSingleUser } from '../server/server.js';

export default function LoginForm()
{

const [userName, setUserName] = useState("");

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1>Login</h1>
            <div>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={(e) => CreateSingleUser(userName)}className="button is-block is-info is-fullwidth">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
