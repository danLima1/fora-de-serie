import React, { useState } from "react";
import "./loginModal.css";
import LinkButton from "../Button";
import { useNavigate } from "react-router-dom";
import validateForm from "../validateForm";


const LoginModal = ({ setLoginModalWindow, setValidLogin, loginModalWindow, hideMenu, validLogin, getUser }) => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const validate = validateForm("login");

  const getUsers = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_USERS_URL);
      const body = await response.json();
      return body.data;
    }
    catch (err) {
      console.log(err.message)
    }
  }


  const handleValidation = (e) => {

    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const hideLoginModal = () => {
    setLoginModalWindow(false);
    setFormValue({ email: '', password: '' });
    setFormError({});
    setSubmit(false);
  }

  const handleLogin = async (e) => {
    setVerificationError('');
    e.preventDefault();
    setLoading(true);
    setFormError(validate(formValue));
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      return;
    }
    else {
      //find all users
      const existingUsers = await getUsers(formValue.email.toLowerCase());
      //filter existence by email
      const findByEmail = existingUsers.filter((u) => u.email === formValue.email.toLowerCase());
      // if user not found by email
      if (findByEmail.length === 0) {
        setLoading(false);
        setSubmit(false);
        setFormValue({ email: '', password: '' });
        setFormError({})
        setVerificationError("Wrong email");
        return;
      }
      else if (findByEmail.length > 0 && findByEmail[0].password !== formValue.password) {
        setLoading(false);
        setSubmit(false);
        setFormValue({ email: '', password: '' });
        setFormError({});
        setVerificationError("Wrong password");
        return;
      }
      else if (findByEmail.length > 0 && findByEmail[0].password === formValue.password) {
        getUser(findByEmail[0].id);
        setLoading(false);
        hideLoginModal();
        setFormValue({ email: '', password: '' });
        setFormError({});
        setVerificationError("");
        setValidLogin(true);
        navigate('/menu');
      }
    }
  };


  return (
    <article className={`modal ${loginModalWindow ? 'active-modal' : null}`}>
      <section className="modal-main">
        
        <section className="modal-content">
        
        
        </section>
      </section>
    </article>
  );
}

export default LoginModal;