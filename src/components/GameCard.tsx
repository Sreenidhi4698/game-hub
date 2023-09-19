import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/use-games';
import PlatformIcons from './PlatformIcons';
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIcons
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIcons>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
