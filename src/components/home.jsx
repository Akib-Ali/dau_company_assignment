import { WhyUs } from "./whyus"
import { Box } from "@chakra-ui/react"
import { Whyoverlapbg } from "./whyusoverlapbg"
import LargeWithLogoLeft from "./footer"
import { ContactUsMain } from "./contactusmain"

export const Home=()=>{

    
    return(
        <div>

       <Whyoverlapbg/>
        <WhyUs/>
        <ContactUsMain/>
        <LargeWithLogoLeft/>
      
        
        

      </div>
          
    
        
    )
}