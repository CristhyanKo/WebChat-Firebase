import React, { Component } from 'react'
import styled from 'styled-components'
import Message from './message.component'
import { Col, Row } from 'reactstrap'
import { Input } from 'antd'
const { TextArea } = Input

class Chat extends Component {
    state = {
        loading: false
    }

    render() {
        return (
            <Content style={{ width: '100%' }}>
                <Card style={{ width: '50%', height: '500px', borderRadius: '5px', overflow: 'auto' }}>
                    {Object.keys(this.props.messages).map(message => {
                        return (
                            <Message
                                meh={this.props.messages[message]["sender"] === localStorage.getItem('@WebChat:nickname')}
                                author={this.props.messages[message]["sender"]}
                                message={this.props.messages[message]["msg"]}
                            />
                        )
                    })}
                </Card>

                <Card style={{ width: '50%', marginTop: 5, background: '#F1F1F1', borderRadius: '5px' }}>
                    <Row>
                        <Col>
                            <TextArea value={this.props.valueMsg} onChange={this.props.handleMsgChange} onKeyDown={this.props.handleKeyDown} style={{ width: '100%' }} placeholder="Escreva sua mensagem..." autosize />
                        </Col>
                    </Row>
                </Card>
            </Content>
        )
    }
}

const Card = styled.div`
    padding: 25px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    position: relative;
    background: #fff;
    transition: all 0.3s;
 `


const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default Chat




