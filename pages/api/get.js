import { getData } from "../../helpers/database";

export default async function add(req, res) {
  const documents = await getData("authorquote");
  res.status(200).json({ authorquotes: documents });
}
