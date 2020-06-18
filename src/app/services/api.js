import axios from "axios";

export const AxiosService = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGE2NTZlMjQ2MjBlNDAzYzgwZGIxODBiNzMxMmYwMCIsInN1YiI6IjVlZTdlZTQ5ODhiYmU2MDAyMmNjNDU1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WYIfEfCVG41l70P7qGgIMy9eipACcp4xTw7_lLTg8V0"
  }
});
