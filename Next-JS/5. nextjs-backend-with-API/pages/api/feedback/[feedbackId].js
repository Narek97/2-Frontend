import { buildFeedbackPath, extractFeedback } from "./index";

function handler(req, res) {
  const { feedbackId } = req.query;

  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  const selectedFeedback = data.find((feedback) => feedback.id === feedbackId);

  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
