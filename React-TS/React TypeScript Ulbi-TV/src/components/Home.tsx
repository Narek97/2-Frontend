import React from "react";
import Card, { CardVariant } from "./Card";
import EventsExample from "./EventsExample";

const Home = () => {
  return (
    <div>
      <EventsExample />
      <br />
      <br />
      <Card
        width={"100px"}
        height={"100px"}
        // onClick={() => alert("ok")}
        onClickNumber={(num) => alert(num)}
        variant={CardVariant.primary}
      >
        <button>Click</button>
      </Card>
    </div>
  );
};

export default Home;
