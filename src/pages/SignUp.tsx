import { useState } from "react";
import { BsShieldLock } from "react-icons/bs";
import { GrContactInfo } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import styles from "../styles/Auth.module.css";

type Props = {};

const initData = {
  name: "",
  email: "",
  password: "",
  confirmPass: "",
};

const SignUp = (props: Props) => {
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
      {/* Left part div  */}
      <div className={styles.left}>
        <h1>Create Your Account</h1>
      </div>

      {/* Right part div  */}
      <div className={styles.right}>
        {/* <InputField/> */}
        <form onSubmit={handleSubmit}>
          <div className={styles.right__input}>
            <input
              type={"text"}
              name={"name"}
              placeholder={"Enter name"}
              value={formData.name}
              onChange={handleChange}
            />
            <GrContactInfo />
          </div>
          <div className={styles.right__input}>
            <input
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
          <div className={styles.right__input}>
            <input
              type={"text"}
              name={"confirmPass"}
              placeholder={"Confirm password"}
              value={formData.confirmPass}
              onChange={handleChange}
            />
            <BsShieldLock />
          </div>
          <input className={styles.right__btn} type={"submit"} value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// type InputFieldProps = {
//   type: string;
//   name: string
//   value: string;
//   placeholder: string;

//   handleChange: (e:React.ChangeEvent<HTMLInputElement>) => {}
// }
// const InputField = ({type, name,value, placeholder,handleChange}: InputFieldProps) => {
//     return (
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={handleChange}
//       />
//     );
// }
