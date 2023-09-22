import { Heading } from '@chakra-ui/react';
import usePlatfrom from '../hooks/use-platform';
import useGenres from '../hooks/use-genres';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const { data: genres } = useGenres();

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = genres?.results.find((g) => g.id == genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatfrom(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as={'h1'} marginY={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
