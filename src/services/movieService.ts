import axios from "axios";
import type { MovieResponse } from "../types/movie";


const API_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<MovieResponse> => {
  const response = await axios.get<MovieResponse>(API_URL, {
    params: { query },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.data;
};
