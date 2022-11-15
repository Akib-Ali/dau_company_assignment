import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';

import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper( {children, children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12} mt={["250px", "50px"]}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl" backgroundColor="black" color="white">
              Basics
            </Text>
            <HStack justifyContent="center" backgroundColor="gray.200">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="3xl" fontWeight="900">
                9.99
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /year
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                10GB Storage
              </ListItem>
              <Divider/>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                10 Emails
              </ListItem>
              <Divider/>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                10 Domains
              </ListItem>
              <Divider/>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                1GB Bandwidth
              </ListItem>
              <Divider/>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="green" >
                SignUp
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl" backgroundColor="green.500" color="white">
                Pro
              </Text>
              <HStack justifyContent="center" backgroundColor="gray.200">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="3xl" fontWeight="900">
                  24.99
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /year
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  25GB Storage
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  25 Emails
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  25 Domains
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  25 Bandwidth
                </ListItem>
                <Divider/>
                
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="green">
                  Sign Up
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl" backgroundColor="black" color="white">
              Premimum
            </Text>
            <HStack justifyContent="center" backgroundColor="gray.200">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="3xl" fontWeight="900">
                49.99
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /year
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                50GB Storage
              </ListItem>
              <Divider/>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                50Emails
              </ListItem>
              <Divider/>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                 50 Domains
              </ListItem>
              <Divider/>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                 5GB Bandwidth
              </ListItem>
              <Divider/>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="green">
                Sign Up
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}