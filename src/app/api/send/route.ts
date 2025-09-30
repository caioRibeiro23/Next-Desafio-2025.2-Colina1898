import KoalaWelcomeEmail from '@/components/resend/emailTemplate';
import { Resend } from 'resend';
import { FormData } from '@/src/schema/form';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
  try {
    const body: FormData = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Colina1898 <no-reply@resend.dev>',
      to: ['caio.ribeiro@codejr.com.br'],
      subject: 'Colina1898 - Contato',
      react: KoalaWelcomeEmail({ userFirstname: body.name, userEmail: body.email, assunto: body.subject, message: body.message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}