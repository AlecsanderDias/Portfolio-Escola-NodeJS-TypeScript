import pg from "pg";
const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'test',
    user: 'test',
    password: 'test'
});
await client.connect();
export default client;
