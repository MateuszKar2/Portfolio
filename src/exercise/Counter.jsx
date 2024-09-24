import React, {Component} from "react"

class Counter extends Component {

    static defaultProps = { 
        step: 1,
        initialValue: 0,
    };

        state = {
            value: this.props.initialValue,
         }


handleIncrement(evt) {
    console.log(Increment, evt)
}

handleDecrement(evt) {
    console.log(Decrement, evt)
}

    render() {
        const { step } = this.step

        return(
            <>
                <div>
                    <span>{this.state.value}</span>
                    <button type="button" onClick={this.handleIncrement}>Incerment by {step}</button>
                    <button type="button" onClick={this.handleDecrement}>Decerment by {step}</button>
                </div>
            </>
        )
    }
}

export default Counter;