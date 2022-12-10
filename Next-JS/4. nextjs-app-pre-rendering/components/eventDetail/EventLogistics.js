import React from "react";
import classes from "./EventLogistics.module.css";
import LogisticsItem from "./LogisticsItem";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import Image from "next/image";

const EventLogistics = ({ date, address, image, imageAlt }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");
  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={300} height={300} />
        {/*<img src={`/${image}`} alt={imageAlt} />*/}
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
