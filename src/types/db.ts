import {QueryBuilder, Sql} from 'knex';
export interface DBQuerySQLReturn {
    sql: string;
    bindings: Array<string>;
}

interface DBQuerySQL extends Sql {
    toNative(): DBQuerySQLReturn;
}

export interface DBQueryBuilder extends QueryBuilder {
    toSQL(): DBQuerySQL;
}

/** Custom client used for transactions */
export interface TransactionClient {
    client: any;
    notifications: Array<any>;
    errors: Array<Error>;
}

/** Field metadata from sql return */
export interface DBQueryField {
    name: string;
    type: string;
    length?: number;
}

/** Data returned by database */
export interface DBQueryResult {
    rowCount: number;
    rows: Array<any>;
    fields?: Array<DBQueryField>;
}