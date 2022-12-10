import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const HomePage = ({ meetups }) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <>
      <Head>
        <title>React Meetup</title>
        <meta name={"description"} content={"Some content"} />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

// export const getServerSideProps = async ({ req, res }) => {
//   // console.log(req, "req");
//   // console.log(res, "res");
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  // const res = await fetch("/api/meetups");
  // const data = res.json();
  //
  // console.log(data, "data");

  const client = await MongoClient.connect(
    "mongodb+srv://narek:narek123@cluster0.f2udkbv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups, "meetups");
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
