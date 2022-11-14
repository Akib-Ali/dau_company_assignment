import { WhyUs } from "./whyus"
import { Box } from "@chakra-ui/react"
import { Whyoverlapbg } from "./whyusoverlapbg"
import LargeWithLogoLeft from "./footer"
import { ContactUsMain } from "./contactusmain"
import CaptionCarousel from "./imagecrausel"

export const Home=()=>{

    
    return(
        <div>

        <CaptionCarousel/>

       <Whyoverlapbg/>
        <WhyUs/>
        <ContactUsMain/>
        <LargeWithLogoLeft/>
      
        
        

      </div>
          
    
        
    )
}