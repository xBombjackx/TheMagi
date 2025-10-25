import { Database } from './db/database';
import { PostgresDatabase } from './db/postgres';
import { SqliteDatabase } from './db/sqlite';

let db: Database;

if (process.env.NODE_ENV === 'production') {
  db = new PostgresDatabase();
} else {
  db = new SqliteDatabase();
}

export default db;
