import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/apiUtil";
import Head from "next/head";
import NewsletterRegistration from "../components/input/NewsletterRegistration";

const HomePage = ({ events }) => {
  return (
    <div>
      <Head>
        <title>Next js title</title>
        <meta name={"description"} content={"some content"} />
      </Head>
      <NewsletterRegistration />
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 600,
  };
}

export default HomePage;
