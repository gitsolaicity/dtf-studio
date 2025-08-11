import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.formData();

  const name = data.get('name') as string;
  const email = data.get('email') as string;
  const message = data.get('message') as string;
  const services = data.getAll('services[]') as string[];

  const file = data.get('file');
  const attachments = [];

  if (file instanceof File && file.size > 0) {
    try {
      const buffer = await file.arrayBuffer();
      const base64 = Buffer.from(buffer).toString('base64');

      attachments.push({
        filename: file.name,
        content: base64,
        encoding: 'base64',
      });
    } catch (err) {
      console.error("Помилка при обробці файлу:", err);
      // Можно продолжить без вложения, если файл не удалось обработать
    }
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM!,
      to: process.env.RESEND_EMAIL_TO!,
      subject: `Нове замовлення від ${name}`,
      html: `
        <h2>Нове замовлення з сайту</h2>
        <p><strong>Ім’я:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Послуги:</strong> ${services.join(', ') || 'Не вибрано'}</p>
        <p><strong>Повідомлення:</strong><br/>${message}</p>
        ${attachments.length > 0 ? `<p>📎 Файл прикріплено: ${attachments[0].filename}</p>` : ''}
      `,
      attachments,
    });

    if (error) {
      console.error("Помилка при надсиланні листа:", error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Помилка при обробці:", e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
