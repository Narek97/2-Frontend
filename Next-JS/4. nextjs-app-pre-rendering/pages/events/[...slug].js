import React from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../dummy-data";
import Head from "next/head";

const FilteredEventsPage = ({ hasError, filterEvents }) => {
  const { query } = useRouter();
  const filterData = query.slug;

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name={"Event description"}
        content={`Filtered Events description`}
      />
    </Head>
  );

  if (!filterData) {
    return (
      <>
        {pageHeadData}
        <p className={"center"}>Loading...</p>
      </>
    );
  }

  const [year, month] = filterData;

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name={"Event description"}
        content={`Filtered Events description ${year}/${month}`}
      />
    </Head>
  );

  if (hasError) {
    return (
      <>
        {pageHeadData}
        <p className={"center"}>Invalid filter. Place adjust your values!</p>
      </>
    );
  }

  if (!filterEvents || !filterEvents.length) {
    return (
      <>
        {pageHeadData}
        <div className={"center"}>
          <p>No events found</p>
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(+year, +month - 1);

  return (
    <div>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filterEvents} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const [year, month] = params.slug;
  if (
    isNaN(+year) ||
    isNaN(+month) ||
    +year > 2030 ||
    +year < 2021 ||
    +month < 1 ||
    +month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const filterEvents = await getFilteredEvents({
    year: +year,
    month: +month,
  });

  return {
    props: { filterEvents },
  };
}

export default FilteredEventsPage;
