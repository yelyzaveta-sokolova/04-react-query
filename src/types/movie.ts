export interface Movie {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

export interface MoviesResponse {
  results: Movie[];
  total_pages: number;
}
