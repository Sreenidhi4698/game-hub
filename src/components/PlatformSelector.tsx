import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/use-platforms';
import usePlatfrom from '../hooks/use-platform';

interface Props {
  onPlatformSelect: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const platform = usePlatfrom(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onPlatformSelect(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
