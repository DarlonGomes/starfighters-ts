import "./config/config"
import pg from "pg";

const { Pool } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
};


export const connection = new Pool(configDatabase);