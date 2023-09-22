import useTrailers from '../hooks/use-trailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  const first = data?.results[0];

  if (isLoading) return null;
  if (error) throw error;

  return first ? (
    <video src={first.data.max} poster={first.preview} controls></video>
  ) : null;
};

export default GameTrailer;
