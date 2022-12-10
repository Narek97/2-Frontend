import React from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../helpers/apiUtil";
import Head from "next/head";

const AllEventsPage = ({ events }) => {
  if (events.error) {
    return <h2>{events.error}</h2>
  }

  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name={"Events description"} content={"some Events content"} />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getAllEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
