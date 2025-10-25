export interface Database {
  query(sql: string, params?: any[]): Promise<any>;
}
