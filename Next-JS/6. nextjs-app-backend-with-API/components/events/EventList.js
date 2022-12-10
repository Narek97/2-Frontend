import React from "react";
import classes from "./EventList.module.css";
import EventItem from "./EventItem";

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </ul>
  );
};

export default EventList;
