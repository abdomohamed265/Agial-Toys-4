import React, { useState } from "react";
import { CartProvider } from "react-use-cart";
import { Form,  Alert } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../features/slices/authSlice";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // let isValid = false;

  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = {};

    if (!email) {
      formErrors.email = "Email is required";
      // return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
      // return false;
    }
    if (!password) {
      formErrors.password = "Password is required";
      // return false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      // return false;
    }

    if (Object.keys(formErrors).length === 0) {
      // Form is valid
      setErrors({});
      axios
        .post(`https://agial-toys-4.onrender.com/login`, {
          email,
          password,
        })
        .then(function (response) {
          console.log(response.data.token);
          Cookies.set("token", response.data.token, {
            expires: 10000,
            secure: true,
          });
          dispatch(setUser(response.data.token))
          navigate("/header");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("🚀 ~ handleSubmit ~ formErrors:", formErrors);
      // Form is invalid
      setErrors(formErrors);
    }
  };
  return (
    <CartProvider>
      <Navbar />
      <div style={{ backgroundImage: "url(/img/images/18954499_6057485.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", }}>
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100">
          <div className="50-w p-5 rounded bg-white">
            <h1 className="text-center">تسجيل دخول</h1>
            <Form onSubmit={handleSubmit}>
              {errors.global && <Alert variant="danger">{errors.global}</Alert>}

              <Form.Group controlId="formEmail">
                <Form.Label>الإيميل</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>كلمة السر</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  isInvalid={errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <button className="btn btn-primary mt-4 w-100" type="submit">تسجيل الدخول</button>
              <p className="mt-4">
                هل نسيت  <NavLink>كلمة السر؟</NavLink>             <NavLink to="/login">عمل مستخدم جديد</NavLink>
              </p>
            </Form>
          </div>

        </div>
      </div>
      <Footer />
    </CartProvider>

  );
}
export default LoginForm;
