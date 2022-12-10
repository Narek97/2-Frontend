import { useRef, useState } from "react";

export default function Home() {
  const [feedBackItems, setFeedbackItems] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const feedbackValue = feedbackRef.current.value;

    const reqBody = { email: emailValue, text: feedbackValue };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data, "data"));
  };

  const loadFeedbackHandler = () => {
    fetch("/api/feedback", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setFeedbackItems(data.feedback));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Yor Email Address</label>
          <input type="text" id={"email"} ref={emailRef} />
        </div>

        <div>
          <label htmlFor="feedback">Yor Feedback</label>
          <textarea id={"feedback"} rows={5} ref={feedbackRef} />
        </div>
        <button type={"submit"}>Send Feedback</button>
      </form>
      <hr />
      {feedBackItems.map((feedback) => (
        <div key={feedback.id}>
          <h2>email - {feedback.email}</h2>
          <p>text - {feedback.text}</p>
          <hr />
        </div>
      ))}
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
    </div>
  );
}
