import React from "react";
import classes from "./EventItem.module.css";
import Button from "../ui/Button";
import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import Image from "next/image";

const EventItem = ({ item }) => {
  const humanReadableDate = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = item.location.replace(", ", "\n");
  const exploreLink = `/events/${item.id}`;

  return (
    <li className={classes.item}>
      <Image src={"/" + item.image} alt={item.title} width={250} height={160} />
      {/*<img src={"/" + item.image} alt={item.title} />*/}
      <div className={classes.content}>
        <div>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
