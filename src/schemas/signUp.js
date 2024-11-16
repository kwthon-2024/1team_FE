import { z } from 'zod'

export const signUpSchema = z.object({
  studentId: z
    .string()
    .min(1, '학번을 입력해주세요.')
    .regex(/^\d+$/, '학번은 숫자만 입력할 수 있습니다.'),
  department: z
    .string()
    .min(1, '학과를 입력해주세요.')
    .regex(/^[가-힣]+$/, '학과는 한글만 입력할 수 있습니다.'),
  name: z.string().min(1, '이름을 입력해주세요.'),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다.'),
  email: z.string().email('유효한 이메일을 입력해주세요.'),
})
