import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();
  const onAddMeetupHandler = async (enteredMeetupData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    //brouzeri het gnalu kochaky sxmeluch replace 2 eja het tanum push mi eja het tanum
    // router.replace("/");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta name={"description"} content={"Some content"} />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
