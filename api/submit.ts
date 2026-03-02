export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, title, company, email, phone } = req.body;

  if (!name || !title || !company || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  console.log("New Registration:", {
    name,
    title,
    company,
    email,
    phone,
  });

  return res.status(200).json({ message: "Registration received" });
}
