import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validera indata
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alla fält är obligatoriska!' },
        { status: 400 }
      );
    }

    // Skapa transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // E-postinställningar
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Skicka till dig själv
      subject: `Nytt meddelande från ${name}`,
      replyTo: email,
      html: `
        <h2>Nytt kontaktformulär meddelande</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Skicka e-post
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'E-post skickad framgångsrikt!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Kunde inte skicka e-post. Försök igen senare.' },
      { status: 500 }
    );
  }
}