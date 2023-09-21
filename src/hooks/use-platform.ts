import usePlatforms from './use-platforms';

const usePlatfrom = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatfrom;
