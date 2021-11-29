export class CreateTransactionDto {
  id: string;
  fromId: string;
  toId: string;
  created_at: Date;
  moneyQuantity: number;
}
