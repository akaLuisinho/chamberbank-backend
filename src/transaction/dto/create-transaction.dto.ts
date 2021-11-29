export class CreateTransactionDto {
  id: string;
  UserId: string;
  //   user: string;
  created_at: Date;
  moneyQuantity: number;
  operationType: string;
}
