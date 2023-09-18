import React from "react";
import classes from "./Login.module.css";
import logo from "../../assets/logo-amplio.png";

const Login = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submited");
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.logoContainer}>
        <img src={logo} alt="artisan-tool" className={classes.logo}></img>
      </div>
      <div className={classes.loginContainer}>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.formGroup}>
            <label htmlFor="emailInput">Email</label>
            <input type="text" id="emailInput"></input>
            {/* <small id="helpId" class="form-text text-muted">
                Help text
              </small> */}
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="passInput">Password</label>
            <input type="password" id="passInput"></input>
          </div>
          <div className={classes.btnCont}>
            <button onSubmit={onSubmitHandler} className={classes.buttonSubmit}>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
