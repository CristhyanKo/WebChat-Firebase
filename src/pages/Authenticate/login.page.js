import React, { Component } from 'react'
import db from '../../firebase'

export default class Login extends Component {
    state = {
        nickname: '',
        email: '',
    }

    handleClick = e => {
        db.ref().child('users').push({
            nickname: this.state.nickname,
            email: this.state.email,
        }).then(() => {
            localStorage.setItem('@WebChat:nickname', this.state.nickname)
            localStorage.setItem('@WebChat:email', this.state.email)
        }).then(() => {
            this.props.history.push('/')
        })

        this.setState({ joined: true });
    };

    render() {
        return (
            <div>
                <input placeholder="Nickname" value={this.state.nickname} onChange={env => this.setState({ nickname: env.target.value })} /><br />
                <input placeholder="Email" value={this.state.email} onChange={env => this.setState({ email: env.target.value })} /><br />
                <button onClick={this.handleClick}>ENTRAR</button>
            </div>
        )
    }
}
