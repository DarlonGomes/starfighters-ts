
import axios from "axios";
import { starfighter } from "../repositories/battleRepository";

export async function getUserStar (user:string){
    const { data: userReposInfo } = await axios.get(`https://api.github.com/users/${user}/repos`);
    const userStargazersCount: number = userReposInfo.reduce((sum: number, repo: any) => (sum + repo.stargazers_count), 0);
    return userStargazersCount
}

export async function checkIfUserExist (user:string){
    const { rows: [userInfo]} = await starfighter.checkUser(user);
    return userInfo
}