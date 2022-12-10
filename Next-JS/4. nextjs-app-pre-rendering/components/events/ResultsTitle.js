import React from "react";
import Button from "../ui/Button";

const ResultsTitle = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={"center"}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link={"/events"}>Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
