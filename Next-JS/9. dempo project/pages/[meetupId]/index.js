import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const MeetupDetailsPage = ({ meetupData }) => {
  const { title, image, description, address } = meetupData;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={"description"} content={description} />
      </Head>
      <MeetupDetail
        title={title}
        image={image}
        description={description}
        address={address}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://narek:narek123@cluster0.f2udkbv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  console.log(meetups, "meetups");
  client.close();

  //  fallback: false menak en ejerne en linelu voroch id nery naxoroq stexov poxanchenq orinak m1 m2, m3 id ov ejy taneluya 404 ej
  //  fallback: true  bachi es id-ov  ejerich kara eli urish id-ov ejer linen

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async ({ params }) => {
  const meetupId = params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://narek:narek123@cluster0.f2udkbv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  console.log(selectedMeetup, "selectedMeetup");
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetailsPage;
