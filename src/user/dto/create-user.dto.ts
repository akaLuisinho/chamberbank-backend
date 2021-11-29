export class CreateUserDto {
  id: string;
  name: string;
  accountCode: string;
  password: string;
  cpf: string;
  email: string;
  phone: string;
  balance: number;
  transactions: any;
  created_at: Date;
  updated_at: Date;
}
