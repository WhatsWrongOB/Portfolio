import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaKey, FaUserAstronaut } from "react-icons/fa";
import user from "/public/user.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/reducers";
import { useLoginMutation } from "../redux/api";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [login, { isLoading }] = useLoginMutation();

  const handleShowPass = () => {
    setActive(!active);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData).unwrap();
      if (res.success) {
        dispatch(signIn());
        toast.success(res.message);
        navigate("/dashboard");
      }
    } catch (err) {
      const errorMessage =
        err?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <section className="auth">
      <div className="auth_container">
        <div className="auth_upper">
          <div>
            <img src={user} alt="user" />
          </div>
          <h1>Admin Login</h1>
        </div>
        <form className="auth_form" onSubmit={handleSubmit}>
          <div className="group">
            <FaUserAstronaut size={17} color="black" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="group">
            <FaKey size={17} color="black" />
            <input
              type={active ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="eye" onClick={handleShowPass}>
              {active ? <FaEyeSlash color="black" /> : <FaEye color="black" />}
            </span>
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <ClipLoader loading={isLoading} size={15} color="white" />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="forget">
          Back to home? <Link to="/">Click here</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
