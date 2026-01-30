import About from "../about/About"
import Contact from "../contact/Contact"
import Home from "../home/Home"
import Portfolio from "../portfolio/Portfolio"
import Skill from "../skill/Skill"
import Tech from "../tech_stack/tech"

const Main=()=>{
    return(
        <div>
            <Home/>
            <About/>
            <Tech/>
            <Skill/>
            <Portfolio/>
            <Contact/>
        </div>

    )
}

export default Main