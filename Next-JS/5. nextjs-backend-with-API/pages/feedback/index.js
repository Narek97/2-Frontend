import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const Feedback = ({ feedBackItems }) => {
  const loadFeedbackHandler = (id) => {
    fetch(`/api/feedback/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <ul>
      {feedBackItems.map((feedback) => (
        <li key={feedback.id}>
          {feedback.text}
          <button onClick={() => loadFeedbackHandler(feedback.id)}>
            Shoe Details
          </button>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedBackItems: data,
    },
  };
}

export default Feedback;
