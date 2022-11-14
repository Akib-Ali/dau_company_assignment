import { WhyUs } from "./whyus"
import { Box } from "@chakra-ui/react"
import { Whyoverlapbg } from "./whyusoverlapbg"
import LargeWithLogoLeft from "./footer"
import { ContactUsMain } from "./contactusmain"
import CaptionCarousel from "./imagecrausel"
import ThreeTierPricing from "./PricingTable/basics"

export const Home=()=>{

    
    return(
        <div>

        <CaptionCarousel/>

       <Whyoverlapbg/>
        <WhyUs/>
        <ThreeTierPricing/>
        <ContactUsMain/>
        <LargeWithLogoLeft/>
      
        
        

      </div>
          
    
        
    )
}