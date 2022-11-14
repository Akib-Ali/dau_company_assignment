import { Box,Text } from "@chakra-ui/react"
import { Divider } from '@chakra-ui/react'

export const ContactUs=()=>{

    const salesTeamRules = [
"✓ Cash on delivery is only serviceable in specific cities and pin codes. You can check if your location is eligible for COD via the availability checker above.",

"✓ In case of COD orders, order confirmation will be required from the recipient over call. Orders will not be dispatched until phone confirmation is completed.",

"✓ COD payment can be accepted by cash or credit/debit card. E-vouchers, store credit or foreign currency cannot be accepted as mode of payment.",

"✓ For COD orders refunds will be provided via store credit equivalent to the total order value. We cannot refund the amount by any other method, such as UPI or bank transfer. Shipping fee for COD order is non-refundable.",

"✓ Any dispute arising due to COD is subject to the jurisdiction of Bangalore, Karnataka."


    ]


    return(
        <Box  width={["99%","45%"]}  pl="10px">
            <Text fontSize={"3xl"} fontWeight={"700"}>Contact our sales team</Text>
            <Text>Let's explore how Notion can work for you</Text>

           {salesTeamRules.map((elem,index)=>{

            return(
           <Box>
            <Text backgroundColor={"#FCFDF2"} mt="0px" padding={"20px"}>{elem}</Text>
            <Divider /> 
            
           </Box>
            )
           })}

        </Box>
    )



}