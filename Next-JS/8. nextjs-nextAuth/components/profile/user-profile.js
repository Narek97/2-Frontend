import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { useSession } from "next-auth/react";
// import { getSession } from "next-auth/react";
// import { useEffect, useState } from "react";

function UserProfile() {
  const { data: session, status } = useSession();
  console.log(session,'session')
  // const [isLoading, setIsLoading] = useState(true);
  //
  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = "/auth";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);
  //
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  const onChangePasswordHandler = async (passwordData) => {
    const res = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data, "data");
  };

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={onChangePasswordHandler} />
    </section>
  );
}

export default UserProfile;
