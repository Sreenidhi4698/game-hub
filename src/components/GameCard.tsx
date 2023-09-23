import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import Game from '../entities/Game';
import PlatformIcons from './PlatformIcons';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack marginBottom={3} justifyContent={'space-between'}>
            <PlatformIcons
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            ></PlatformIcons>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize={'2xl'}>
            <Text>{game.name}</Text>
            <Emoji rating={game.rating_top}></Emoji>
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
