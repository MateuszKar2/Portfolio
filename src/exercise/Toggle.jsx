import React, {Component} from "react"



class Toggle extends Component {

    state = { isOpen: false }

    show = () => this.setState({ isOpen: true })

    hide = () => this.setState({ isOpen: false })

    render() {
        const {isOpen} = this.state;
        const {Children} = this.state;
        
        return(
            <>
                <button onClick={this.show}>show</button>
                <button onClick={this.hide}>hide</button>  
                {isOpen && Children}          
            </>
        )
    }
}

export default Toggle 