import React, { Component } from 'react';
import DMlogo from '../imgs/DM-logo.png';
import bgImage from '../imgs/doodles-01.png';


class Login extends Component {

    constructor() {
        super()

        this.state = {
            username: ''
            ,password: ''
            ,deg: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.spinLogo = this.spinLogo.bind(this);
    }

    componentDidMount() {
        document.getElementById('username').addEventListener('focus', () => this.spinLogo(555))
        document.getElementById('password').addEventListener('focus', () => this.spinLogo(-441))
        this.props.setRoute('login');
    }

    spinLogo(deg) {
        deg += this.state.deg;
        const logo = document.getElementById('DMlogo');
        logo.style.transform = `rotate(${deg}deg)`;
        this.setState({ deg: deg})

    }

    handleSubmit(e) {
        e.preventDefault();
        const logo = document.getElementById('lockBody');
        logo.classList.toggle('unlock');
    }

    render() {
        const bgStyles = {
            backgroundImage: `url(${bgImage})`
            ,backgroundRepeat: 'repeat'
            // ,backgroundSize: 'contain'
            // ,backgroundPosition: 'center'
        }

        return (
            <div className="Login" style={ bgStyles }>
                <form className="loginForm">
                    <div className="lock">
                        <div className="lockShank"></div>
                        <div id="lockBody">
                            <div>
                                <img id="DMlogo" alt="DM logo" src={ DMlogo } />
                            </div>
                        </div>
                    </div>

                    <input  type="text" 
                            ref="username" 
                            id="username" 
                            placeholder="username" 
                            onChange={() => this.spinLogo(23)}/>
                    <input  type="password" 
                            ref="password" 
                            id="password" 
                            placeholder="password" 
                            onChange={() => this.spinLogo(34)}/> 
                    <h3 className="loginButton" onClick={(e) => this.handleSubmit(e)}>Log In</h3>
                </form>
            </div>
        )
    }
}

export default Login;