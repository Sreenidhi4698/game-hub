import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSeatchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSeatchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder='Search games...'
          variant={'filled'}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
