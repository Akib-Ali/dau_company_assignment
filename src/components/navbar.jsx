import { ReactNode } from 'react';
import {
    Text,
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const Links = ['Home', 'Products','Services','Team','Portfolio','Blog' ,'Contact'];

const NavLink = ( {children, children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
       bg: useColorModeValue('gray.500', 'gray.500'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('skyblue', 'skyblue')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} justifyContent={'space-around'}>
            
            <HStack
            
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}  color={"white"}>
              {Links.map((link) => (
                <NavLink  key={link}>{link}</NavLink>
              ))}

              {/* <HStack>
                <Link>Go to blog</Li
                
              </HStack> */}
    
            </HStack>

          
            
          </HStack>
          
          <Flex alignItems={'center'}>
        
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
   
            <Link color={"white"}>Go To My Blog</Link>

             </MenuButton>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    
    </>
  );
}