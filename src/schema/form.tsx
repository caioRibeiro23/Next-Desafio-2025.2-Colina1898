import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }).max(100, { message: 'Nome deve ter no máximo 100 caracteres' }),
  email: z.string().email({ message: 'Email inválido. Por Favor, insira um email válido' }),
  subject: z.string().min(5, { message: 'Assunto deve ter pelo menos 5 caracteres' }).max(100, { message: 'Assunto deve ter no máximo 100 caracteres' }),
  message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' }).max(1000, { message: 'Mensagem deve ter no máximo 1000 caracteres' }),
});

export type FormData = z.infer<typeof formSchema>;