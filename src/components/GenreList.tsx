import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/use-genres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    return null;
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
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
  );
};

export default GenreList;
