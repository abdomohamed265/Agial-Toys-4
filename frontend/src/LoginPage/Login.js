import React, { useState } from "react";
import { Form,Alert } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartProvider} from "react-use-cart";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  // let isValid = false;

  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = {};

    if (!firstName) {
      formErrors.firstName = "First name is required";
      // return false;
    } else if (firstName.length < 3) {
      formErrors.firstName = "First name must be at least 3 characters";
      // return false;
    }
    if (!lastName) {
      formErrors.lastName = "Last name is required";
      // return false;
    } else if (lastName.length < 3) {
      formErrors.firstName = "last name must be at least 3 characters";
      // return false;
    }
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
    if (!confirmPassword) {
      formErrors.confirmPassword = "Confirm password is required";
      // return false;
    } else if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
      // return false;
    }
    if (Object.keys(formErrors).length === 0) {
      // Form is valid
      setErrors({});
      console.log(firstName, lastName, email, password);
      axios
        .post(`https://agial-toys-4.onrender.com/signup`, {
          firstName,
          lastName,
          email,
          password,
        })
        .then(function (response) {
          console.log(response.data);
          navigate("/loginform");
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
      <div style={{ backgroundImage: "url(/img/images/6706368_3408105.jpg)" ,height:"650px",backgroundSize:"cover",backgroundPosition:"center" }}>
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100">
          <div className="40-w p-5 rounded bg-white mt-5">
            <h1>عمل مستخدم جديد</h1>
            <Form onSubmit={handleSubmit}>
              {errors.global && <Alert variant="danger">{errors.global}</Alert>}
              <Form.Group controlId="formFirstName">
                <Form.Label>الإسم الأول</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  isInvalid={errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>الإسم الأخير</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  isInvalid={errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
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
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>تأكيد كلمة السر</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  isInvalid={errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
              <button className="btn btn-primary mt-4 w-100" type="submit" style={{backgroundColor:"darkblue"}}>التسجيل</button>
              <p className="mt-3 text-center">
                <NavLink to="/loginform" style={{color:"darkblue"}}>تسجيل الدخول</NavLink>
              </p>
            </Form>
          </div>

        </div>
      </div>
      <Footer/>
    </CartProvider>
  );
}
export default Login;
