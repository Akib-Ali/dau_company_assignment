import { SimpleGrid ,Box,Text} from '@chakra-ui/react'
export const WhyUs=()=>{

    const whyusdata=[
        {value:"11 + Years" , title :"Experience Teaching Kids"},
        {value:"1,300,000+" , title :"Hours of learning Delivered"},
        {value:"400,000+" , title :"Happy Parents"},
        {value:"4.9/5" , title :"Average Rating by Students"}
    ]




    return(
        <Box width={"75%"} m="auto" backgroundColor="yellow">

   <SimpleGrid columns={[2, null, 4]} spacing='40px'>
     
     {whyusdata.map((elem,index)=>{
        return(
        <Box>
            <Text>{elem.value}</Text>
            <Text>{elem.title}</Text>

        </Box>
        )

     })}
    </SimpleGrid>

        </Box>
    )
}