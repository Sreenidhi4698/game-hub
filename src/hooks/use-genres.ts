import useData from './use-data';

export interface Genre {
  id: number;
  name: string;
}

const useGenre = () => useData<Genre>('/genres');

export default useGenre;
