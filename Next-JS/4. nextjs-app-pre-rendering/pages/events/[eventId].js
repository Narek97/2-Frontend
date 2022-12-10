import React from "react";
import EventSummary from "../../components/eventDetail/EventSummary";
import EventLogistics from "../../components/eventDetail/EventLogistics";
import EventContent from "../../components/eventDetail/EventContent";
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from "../../helpers/apiUtil";
import Head from "next/head";

const EventDetailPage = ({ event }) => {
  if (!event) {
    return <p className={"center"}>No event found!</p>;
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name={"Event description"} content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const eventId = params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
  };
}

// export async function getStaticProps(context) {
//   const { params } = context;
//   const eventId = params.eventId;
//   const event = await getEventById(eventId);
//
//   return {
//     props: {
//       event,
//     },
//     revalidate: 10,
//   };
// }
//
// export async function getStaticPaths() {
//   const events = await getFeaturedEvents();
//   const paths = events.map((event) => ({ params: { eventId: event.id } }));
//
//   return {
//     paths,
//     fallback: "blocking",
//   };
// }

export default EventDetailPage;
