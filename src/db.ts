import * as knex from 'knex';
import { DBQueryBuilder, DBQueryResult, TransactionClient } from './types/db';

export class DatabaseWrapper{
    /** Query builder (knex) */
    public get sql(): knex {
        return;
    }

    /** Runs a query from the connection pool */
    public async query(sql: knex.QueryBuilder | string, transaction?: TransactionClient): Promise<DBQueryResult> {
        return;
    }

    /** Gets a transaction client from query pool. **Important: Remember to call releaseTransaction() when finished!** */
    public async getTransaction(): Promise<TransactionClient> {
        return;
    }

    /** Release client from pool
     * @param trx: Database client transaction
     */
    public releaseTransaction(trx: TransactionClient): void {
        return;
    }
}