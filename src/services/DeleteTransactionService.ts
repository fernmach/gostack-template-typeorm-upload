import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';
// import Transaction from '../models/Transaction';

// interface Request {
//   id: string;
// }

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    if (!id) {
      throw new AppError('Transaction id is required.');
    }

    const transactionRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist.');
    }

    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
