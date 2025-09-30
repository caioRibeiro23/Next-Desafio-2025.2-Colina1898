import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface Colina1898EmailProps {
  userFirstname: string;
  userEmail: string;
  assunto: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const Colina1898Email = ({
  userFirstname,
  userEmail,
  assunto,
  message,
}: Colina1898EmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Container style={container}>
        <Img
          src="https://next-desafio-2025-2-colina1898.vercel.app/logo/logo.png"
          width="170"
          height="50"
          alt="Colina1898 Logo"
          style={logo}
        />
        <Text style={paragraph}>Olá {userFirstname}, (@{userEmail})</Text>
        <Text style={paragraph}>
          Formulário de contato enviado. A equipe da Colina1898 entrará em contato em breve e resolveremos a solicitação o mais rápido possível.
        </Text>
        <Text style={paragraph}>
          Informações de contato:
          <br />
          Nome: {userFirstname}
          <br />
          Email: {userEmail}
          <br />
          Assunto: {assunto}
          <br />
          Mensagem: {message}
        </Text>
        <Text style={paragraph}>
          Atenciosamente,
          <br />
          Equipe da Colina1898
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

Colina1898Email.PreviewProps = {
  userFirstname: 'Alan',
} as Colina1898EmailProps;

export default Colina1898Email;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#B69551',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
