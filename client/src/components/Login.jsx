import React, { useState } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import me from "/public/me.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../Context";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const success = await login(email, password);
      if (success) {
        navigate("/dashboard");
        toast.success("Login Successfully");
      } else {
        toast.error("Incorrect email or password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="login">
      <div className="form">
        <div className="login_upper">
          {/* <img src={me} className='circle' alt="me" /> */}
          <h1>Admin Login</h1>
        </div>
        <div className="login_bottom">
          <form className="login_form" onSubmit={handleLogin}>
            <div className="user_email">
              <FaUser color="black" size={19} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="user_pass">
              <FaKey color="black" size={19} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login_btn">
              {loading ? (
                <ClipLoader loading={loading} size={15} color="white" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
        <p className="link_home">
          Back to home? <Link to="/">Home</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
