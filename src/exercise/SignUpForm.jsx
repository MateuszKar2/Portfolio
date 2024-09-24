import React, {Component} from "react"
// import {nanoid} from "nanoid";

const INITIALSTATE = {
    login: "",
    email: "",
    password: "",
    agreed: false,
};

class SignUpForm extends Component{
    state = {...INITIALSTATE};

    // loginInputId = nanoid();

    handleChange = evt => {
        evt.preventDefault();
        const { login, email, password } = this.state;

        this.props.onSubmit({
            ...this.state
        });

        this.reset();
    };

    reset = () => {
        this.this.setState({...INITIALSTATE});
    }


    render(){

        const {login, email, password} = this.props;

        return(
            <form onSubmit={this.handleChange}>
                <label>
                    Name 
                    <input 
                    type="text"
                    placeholder="Enter login"
                    name="login"
                    value={login}
                    onChange={this.handleChange}
                     />
                </label>
                <label>
                    Email
                    <input 
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                     />
                </label>
                <label>
                    Name 
                    <input 
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                     />
                </label>

                <button type="submit">Sign up as {login}</button>
            </form>
        )
    }
}

export default SignUpForm;