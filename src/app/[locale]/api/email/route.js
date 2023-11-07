import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {

  const { email, first_name, last_name, company, phone, message, token } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.DEFAULT_EMAIL_RECIPIENT,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `bdbt.dev - Message from ${first_name} ${last_name} (${company})`,
    html: `
      <div>
        <p>${first_name} ${last_name}</p>
        <p>Company: ${company}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
      </div>
      <div>
        <p>${message}</p>
      </div>
    `,
  };

  const verifyEndpoint = "https://www.google.com/recaptcha/api/siteverify";
  // Validate a "token" that the client-side reCAPTCHA script generated for the user
  const captchaResponse = await fetch(verifyEndpoint, {
    method: "POST",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.SECRET_RECAPTCHA_KEY, // See prior section
      response: token, // the user's generated "Captcha" token
    }),
  }).then((res) => res.json());

  // If the verification fails, return 500x code
  if (!captchaResponse.success) {
    console.error("Invalid captcha response.", captchaResponse["error-codes"][0])
    return NextResponse.json({ error: captchaResponse["error-codes"][0] }, { status: 500 },);
  }

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function(err) {
        if (!err) {
          resolve('Email sent successfully.');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent successfully.' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
