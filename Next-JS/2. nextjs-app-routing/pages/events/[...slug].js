import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";

const FilteredEventsPage = () => {
  const { query } = useRouter();

  const filterData = query.slug;

  if (!filterData) {
    return <p className={"center"}>Loading...</p>;
  }

  const [year, month] = filterData;

  if (
    isNaN(+year) ||
    isNaN(+month) ||
    +year > 2030 ||
    +year < 2021 ||
    +month < 1 ||
    +month > 12
  ) {
    return (
      <p className={"center"}>Invalid filter. Place adjust your values!</p>
    );
  }

  const filterEvents = getFilteredEvents({
    year: +year,
    month: +month,
  });

  if (!filterEvents || !filterEvents.length) {
    return (
      <>
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
      <ResultsTitle date={date} />
      <EventList items={filterEvents} />
    </div>
  );
};

export default FilteredEventsPage;
