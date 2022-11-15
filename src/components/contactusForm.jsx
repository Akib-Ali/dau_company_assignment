import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
         
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder='First Name' />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder='Last Name' />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Work Email</FormLabel>
                <Input type="email"  placeholder='example@gmail.com'/>
              </FormControl>

              <FormControl id="companyname" isRequired>
                <FormLabel>Company name</FormLabel>
                <Input type="text"  placeholder='company name'/>
              </FormControl>

              <FormControl id="countryorreligion" isRequired>
                <FormLabel>Country or region</FormLabel>
                
                <select>
                <option value="india">  India</option>
                 <option value="america">America</option>
                 <option value="america">Africa</option>
                <option value="pakistan">Pakistan</option>

                </select>
              </FormControl>

              <FormControl id="countryorreligion" isRequired>
                <FormLabel> write any thing</FormLabel>

                 <textarea 
                rows="5" cols="25">
                 write any thing here..
                </textarea>

                
               </FormControl>


              <Stack spacing={10} pt={2}>

              <Text>
                By Submitting this form, I acknowledge receipt of the Notion privicay Policy
             </Text>
             <Text>
                All details are required *
             </Text>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'red.400'}
                  color={'white'}
                  _hover={{
                    bg: 'red.200',
                  }}>
                  Submit
                </Button>
              </Stack>
              <Stack pt={6}>
                
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }