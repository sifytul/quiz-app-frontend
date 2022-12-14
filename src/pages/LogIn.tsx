import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import styles from "../styles/Auth.module.css";

type Props = {};

const initData = {
  email: "",
  password: "",
};

const LogIn = (props: Props) => {
  const [formData, setFormData] = useState({ ...initData });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className={styles.left}>Login to your account</h1>
      <div className={styles.right}>
        <form onSubmit={handleSubmit}>
          <div className={styles.right__input}>
            <input
              style={{ width: "100%" }}
              type={"email"}
              name={"email"}
              placeholder={"Enter email"}
              value={formData.email}
              onChange={handleChange}
            />
            <MdAlternateEmail />
          </div>
          <div className={styles.right__input}>
            <input
              type={"text"}
              name={"password"}
              placeholder={"Enter password"}
              value={formData.password}
              onChange={handleChange}
            />
            <RiLockPasswordLine />
          </div>
          <input className={styles.right__btn} type={"submit"} value="Submit" />
          <p style={{ fontSize: "small" }}>
            {" "}
            Don't have an account? Signup instead.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
