import DatabaseConstructor, { Database as SqliteDatabaseType } from 'better-sqlite3';
import { Database } from './database';
import { up } from './migrations';

export class SqliteDatabase implements Database {
  private db: SqliteDatabaseType;

  constructor(dbPath: string = './local.db') {
    this.db = new DatabaseConstructor(dbPath);
    this.db.exec(up);
  }

  async query(sql: string, params?: any[]): Promise<any> {
    const stmt = this.db.prepare(sql);
    if (sql.trim().toUpperCase().startsWith('SELECT')) {
      return Promise.resolve(stmt.all(params));
    } else {
      stmt.run(params);
      return Promise.resolve();
    }
  }
}
