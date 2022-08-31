
import axios from "axios";

export async function getUserStar (user:string){
    const { data: userReposInfo } = await axios.get(`https://api.github.com/users/${user}/repos`);
    const userStargazersCount: number = userReposInfo.reduce((sum: number, repo: any) => (sum + repo.stargazers_count), 0);
    console.log(userReposInfo)
    return userStargazersCount
}