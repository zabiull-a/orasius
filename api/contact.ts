import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { fullName, email, phone, organization, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'ORASIUS Contact <onboarding@resend.dev>',
      to: 'info@orasius.com',
      subject: 'New Contact Form Lead: ' + subject,
      html: '<h2>New Contact Form Submission</h2>' +
      '<p><strong>Full Name:</strong> ' + fullName + '</p>' +
      '<p><strong>Email:</strong> ' + email + '</p>' +
      '<p><strong>Phone:</strong> ' + (phone || 'N/A') + '</p>' +
      '<p><strong>Organization:</strong> ' + (organization || 'N/A') + '</p>' +
      '<p><strong>Subject:</strong> ' + subject + '</p>' +
      '<p><strong>Message:</strong></p>' +
      '<p>' + message + '</p>',
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Email sending failed' });
  }
}
