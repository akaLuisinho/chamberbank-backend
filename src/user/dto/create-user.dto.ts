export class CreateUserDto {
  id: string;
  accountCode: string;
  cpf: string;
  email: string;
  phone: string;
  balance: number;
  extract: number[];
  created_at: Date;
  updated_at: Date;
}
