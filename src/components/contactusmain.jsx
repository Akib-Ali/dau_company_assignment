import { Stack, HStack, VStack } from '@chakra-ui/react'
import { ContactUs } from "./contactus"
import SignupCard from './contactusForm'
import SimpleCard from './contactusForm'

export const ContactUsMain=()=>{


    return(

    <Stack direction={['column', 'row']} spacing='55px' m={["auto"]} mt={["300px", "50px"]} w={["99%","90%"]} border="1px solid grey" borderRadius={"10px"} >
            <ContactUs/>
            <SignupCard/>
        </Stack>
    )


}