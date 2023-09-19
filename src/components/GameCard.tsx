import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/use-games';
import PlatformIcons from './PlatformIcons';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIcons
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        ></PlatformIcons>
      </CardBody>
    </Card>
  );
};

export default GameCard;
