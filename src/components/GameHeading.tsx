import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import usePlatforms from '../hooks/use-platforms';
import usePlatfrom from '../hooks/use-platform';
import useGenres from '../hooks/use-genres';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id == gameQuery.genreId);

  const platform = usePlatfrom(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as={'h1'} marginY={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
