import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, title, company, email, phone } = req.body;

  if (!name || !title || !company || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "ORASIUS Registration <onboarding@resend.dev>",
      to: "finance@orasius.com",
      subject: "New ORASIUS Delegate Registration",
      html: `
        <h2>New Registration Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      `,
    });

    return res.status(200).json({ message: "Registration received" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Email sending failed" });
  }
}
