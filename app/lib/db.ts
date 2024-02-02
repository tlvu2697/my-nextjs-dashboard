import { Pool, QueryResultRow } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export const Query = <Result extends QueryResultRow>(
  text: string,
  params: any[] = [],
) => {
  return pool.query<Result>(text, params);
};
