import { SimpleGrid ,Box,Text,Image} from '@chakra-ui/react'
import { LayoutGroup } from 'framer-motion'
import techcrunchlogo from "../images/techcrunchlogo.webp"
import cnbc from "../images/cnbc.png"
import yahoo from "../images/Yahoo-logo.png"


export const WhyUs=()=>{

    const whyusdata=[
        {value:"11 + Years" , title :"Experience Teaching Kids"},
        {value:"1,300,000+" , title :"Hours of learning Delivered"},
        {value:"400,000+" , title :"Happy Parents"},
        {value:"4.9/5" , title :"Average Rating by Students"}
    ];


    const Whyuscompanylogo= [
        `${techcrunchlogo}`,
        `${cnbc}`,
        `${yahoo}`,
        `${cnbc}`
    ] 

    




    return(

        
        <div style={{marginTop:"-60px" , position :"relative"}} >
        <Box width={["95%", "75%"]}m="auto" backgroundColor="white" h="200px" pl="50px" borderRadius="10px">

       <SimpleGrid columns={[2, null, 4]} spacing='30px'>
     
       {whyusdata.map((elem,index)=>{
        return(
        <Box key={index}>
            <Text fontSize={"20px"} fontWeight={700} >{elem.value}</Text>
            <Text>{elem.title}</Text>

        </Box>
    
        )

     })}
    </SimpleGrid>


    <Box mt="20px">
         
          <SimpleGrid columns={[2, null, 4]} spacing='40px'>
            {Whyuscompanylogo.map((alllogo,index)=>{

                return(
                    <Box boxSize={"sm"} key={index} border="1px solid blue" width={"100%"} h={"100%"}>
                    <Image src={alllogo} h="100px" w="100px" />

                    </Box>
                    
                    
                )
            })}
          </SimpleGrid>
         </Box>


     </Box>

         
     </div>
    )
}