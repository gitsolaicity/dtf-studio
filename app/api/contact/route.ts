import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.formData();

  const name = data.get('name') as string;
  const email = data.get('email') as string;
  const message = data.get('message') as string;

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM!,
      to: process.env.RESEND_EMAIL_TO!,
      subject: `Новое сообщение с сайта от ${name}`,
      html: `
        <h2>Новое сообщение с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong><br/>${message}</p>
      `,
    });

    if (error) {
      console.error("Ошибка при отправке письма:", error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Ошибка при отправке:", e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
