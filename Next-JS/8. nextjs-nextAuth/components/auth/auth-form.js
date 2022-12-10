import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import classes from "./auth-form.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const createUser = async (email, password) => {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //optional: Add validation

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (!result.error) {
        router.replace("/profile");
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result, "result");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const signInWithApp = (e, name) => {
    e.preventDefault();
    signIn(name);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
      <div>
        <Link href={"/api/auth/signin"}>
          <a onClick={(e) => signInWithApp(e, "github")}>SignIn With Github</a>
        </Link>
      </div>
      <div>
        <Link href={"/api/auth/signin"}>
          <a onClick={(e) => signInWithApp(e, "google")}>SignIn With Google</a>
        </Link>
      </div>
    </section>
  );
}

export default AuthForm;
