import { HStack, List, ListItem, Image, Text, Spinner } from '@chakra-ui/react';
import useGenre from '../hooks/use-genres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
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
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
