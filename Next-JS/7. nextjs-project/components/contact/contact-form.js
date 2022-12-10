import React, { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import notification from "../ui/notification";
import Notification from "../ui/notification";

const sendContactData = async (contactDetails) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(dara.message || "Something went wrong!");
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  let notificationData;

  if (requestStatus === "pending") {
    notificationData = {
      status: "pending",
      title: "Sending message...",
      message: "Yor message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notificationData = {
      status: "success",
      title: "Success",
      message: "message send successfully!",
    };
  }

  if (requestStatus === "error") {
    notificationData = {
      status: "error",
      title: "Error",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>

      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id={"email"}
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id={"name"}
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
