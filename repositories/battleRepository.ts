import { connection } from "../dbstrategy/postgres";

export class starfighter {
    static async checkUser(name: string){
        const query = {
            text: `
            SELECT * FROM fighters 
            WHERE username = $1`,
            values: [name],
        }
        return connection.query(query)
    }
    static async createUser (name: string){
        const query = {
            text: `
            INSERT INTO fighters 
            (username, wins, losses, draws)
            VALUES ($1, 0, 0, 0)`,
            values: [name],
        }
        return connection.query(query)
    }
    static async updateUser(user:string, method:string){
        const query = {
            text: `
            UPDATE fighters
            SET $1 = $2 + 1
            WHERE username = $3`,
            values: [method, method, user],
        }
        return connection.query(query)
    }
    static async fighterRank(){
        const query = {
            text: `
            SELECT * FROM fighters
            ORDER BY wins
            `,
        }
        return connection.query(query)
    }
}