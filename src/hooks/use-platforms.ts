import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import ApiClient from '../services/api-client';
import ms from 'ms';

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });
};

export default usePlatforms;
