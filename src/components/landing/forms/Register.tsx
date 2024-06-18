import { FC, useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import Swal from "sweetalert2";

const Register: FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    name: "Jhon",
    lastname: "Doe",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    const newErrors = { email: "", password: "" };

    if (!user.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(user.email))
      newErrors.email = "Email address is invalid";

    if (!user.password) newErrors.password = "Password is required";
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.])[A-Za-z\d!@.#$%^&*.]{8,}$/.test(
        user.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch(
          "https://api-shortener.onrender.com/create-user",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );

        const data = await response.json();

        console.log(data);
        data.message !== "El usuario ya existe!"
          ? (window.location.href = "/iniciar-sesion")
          : Swal.fire({
              title: "Error!",
              text: "This email is already in use!",
              icon: "error",
              confirmButtonText: "Accept",
            });
      } catch (e) {
        console.log(e);
      }
    }
    return;
  };

  return (
    <main className={styles.container}>
      <Link to="/">
        <img src="/bitly_logo.svg" alt="logo-bitlyclone" />
      </Link>

      <div className={styles.containerForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Create your account</h1>
          <p className={styles.paragraph}>
            Already have an account?{" "}
            <Link className={styles.Link} to="/iniciar-sesion">
              Log in
            </Link>
          </p>

          <InputField
            label="Email"
            name="email"
            value={user.email}
            type="email"
            placeholder="E-mail"
            onChange={handleChange}
          />
          {errors.email && <h6>{errors.email}</h6>}

          <InputField
            label="Password"
            name="password"
            value={user.password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && <h6>{errors.password}</h6>}

          <button type="submit">crear</button>

          <span>
            By logging in with an account, you agree to Bitly's{" "}
            <Link className={styles.slink} to="#">
              Terms of Service
            </Link>
            ,{" "}
            <Link className={styles.slink} to="#">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className={styles.slink} to="#">
              Acceptable Use Policy
            </Link>
          </span>
        </form>
      </div>

      <div className={styles.section}>
        <img src="/connections_platform_product.png" alt="bitly-analytics" />
        <h4>
          Power your links, QR Codes, and Link-in-bio with Bitly's Connections
          Platform.
        </h4>
      </div>
    </main>
  );
};

export default Register;
