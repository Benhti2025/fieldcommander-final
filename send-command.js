export default function handler(req, res) {
  res.status(200).json({ status: "Mock command accepted via FieldCommander." });
}