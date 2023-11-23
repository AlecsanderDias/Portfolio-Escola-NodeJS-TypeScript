import pg, {Client} from "pg";

const client: Client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'test',
    user: 'test',
    password: 'test'
});

await client.connect();

export default client;