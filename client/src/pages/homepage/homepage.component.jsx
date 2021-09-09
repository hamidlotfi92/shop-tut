//this page only shows all categories we have


// React
import React from "react"

//components
import Directory from "../../components/directory/directory.component"

//stylles uses tyled library
import { HomePageContainer } from "./homepage.styles"



const HomePage=()=>{
    return(
        <HomePageContainer className="homepage">
        <Directory/>
    </HomePageContainer>
    )
   
}

export default HomePage;