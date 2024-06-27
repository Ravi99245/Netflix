import { Component } from "react"

import {NavElement, NetFlixLogo, LanguageIcon} from './styledComponent'

class Header extends Component {
    state = {currentLanguage : "English"}

    handleChange = (event) =>{
        this.setState({currentLanguage : event.target.value})
    } 

    render(){
        const {currentLanguage} = this.state
        return(
                <NavElement>
                    <NetFlixLogo src = "https://res.cloudinary.com/dxa4rbmrj/image/upload/v1719471028/Netflix_Logo_PMS_czwo5z.png" alt = "logo" />
                    
                    <div>
                    <LanguageIcon />
                        <select id="language" value={currentLanguage} onChange={this.handleChange}>
                            <option value = "English" >English</option>
                            <option value = " हिन्दी" > हिन्दी</option>
                        </select>
                    </div>
                </NavElement>
        )
    }

}

export default Header