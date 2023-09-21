import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { Response } from './use-data';
import genres from '../data/genres';
// import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => ({ data: genres, isLoading: false, error: null });
const useGenre = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<Response<Genre>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {
      count: genres.length,
      results: genres,
    },
  });
};

export default useGenre;
