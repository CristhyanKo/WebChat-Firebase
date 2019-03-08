import React, { Component } from 'react';
import ChatComponent from '../components/chat.component';
import styled from 'styled-components'
import { Icon } from 'antd'
import db from '../firebase'

class Chat extends Component {
    constructor() {
        super()
        this.state = {
            nickname: localStorage.getItem('@WebChat:nickname'),
            email: localStorage.getItem('@WebChat:email'),
            msg: '',
            messages: {},
        }

        this.chatRoom = db.ref().child('chat').child('global')

        this.handleNewMessages = snap => {
            // console.log(snap.val())
            if (snap.val()) {
                console.log('aa',this.state.messages)
                if (Object.entries(this.state.messages).length !== 0 && this.state.messages.constructor === Object) {
                    if (Notification.permission !== "granted")
                        Notification.requestPermission();
                    else {
                        new Notification('Web Chat Firebase', {
                            body: `Nova mensagem de: ${snap.val()[Object.keys(snap.val())[Object.keys(snap.val()).length - 1]]['sender']}
${snap.val()[Object.keys(snap.val())[Object.keys(snap.val()).length - 1]]['msg']}`,
                        });
                    }
                }

                this.setState({ messages: snap.val() })
                console.log('ab',this.state.messages.length)
            }
        }
    }

    componentDidMount() {
        this.chatRoom.on('value', this.handleNewMessages)
    }

    componentWillUnmount() {
        this.chatRoom.off('value', this.handleNewMessages)
    }

    handleMsgChange = e => this.setState({ msg: e.target.value })
    handleKeyDown = e => {
        if (e.key === 'Enter' && this.state.msg.length) {
            this.chatRoom.push({
                sender: this.state.nickname,
                msg: this.state.msg,
            });

            this.setState({ msg: '' })
        }
    }

    render() {
        return (
            <Content>
                <TitleApp>
                    <Icon type="aliwangwang" style={{ top: -8, position: 'relative' }} />
                    WebChat
          <img alt='Logo' src='https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png' />
                </TitleApp>

                <ChatComponent
                    messages={this.state.messages}
                    valueMsg={this.state.msg}
                    handleMsgChange={this.handleMsgChange}
                    handleKeyDown={this.handleKeyDown}
                />
            </Content>
        )
    }
}

export default Chat;

const TitleApp = styled.h2`
    color: #40a9ff;
    padding: 30px;
    font-family: 'Sniglet', cursive;
    img {
      position: relative;
      width: 60px;
      top: 17px;
      left: -60px;
    };
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
 `