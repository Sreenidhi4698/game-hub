import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/use-genres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenre();
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    return null;
  }

  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image
                objectFit={'cover'}
                boxSize={'32px'}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                onClick={() => onSelectGenre(genre)}
                fontSize={'lg'}
                variant={'link'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
