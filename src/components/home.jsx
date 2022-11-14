import { WhyUs } from "./whyus"
import { Box } from "@chakra-ui/react"
import { Whyoverlapbg } from "./whyusoverlapbg"
import LargeWithLogoLeft from "./footer"

export const Home=()=>{

    
    return(
        <div>

       <Whyoverlapbg/>
        <WhyUs/>
        <LargeWithLogoLeft/>
        
        

      </div>
          
    
        
    )
}