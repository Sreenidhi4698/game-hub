import { useQuery } from '@tanstack/react-query';
import ApiClient, { Response } from '../services/api-client';
import genres from '../data/genres';

const apiClient = new ApiClient<Genre>('/genres');

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {
      count: genres.length,
      results: genres,
    },
  });
};

export default useGenre;
