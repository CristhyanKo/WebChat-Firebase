import React from 'react'
import styled from 'styled-components'
import AvatarUser from './avatar.component';

var stringToColour = function (str) {
    var hash = 0;
    for (var item = 0; item < str.length; item++) {
        hash = str.charCodeAt(item) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var itemColor = 0; itemColor < 3; itemColor++) {
        var value = (hash >> (itemColor * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

const Message = (props) => (
    <MessageBody meh={props.meh} author={props.author}>
        <MessageAuthor>
            <AvatarUser user={props.author} style={{ background: 'white', marginRight: '10px' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <b>{props.author}</b>
        </MessageAuthor>
        <MessageContent>
            <p>{props.message}</p>
        </MessageContent>
    </MessageBody>
)

const MessageBody = styled.div`
    background:  ${props => props.meh ? '#F1F1F1' : !!localStorage.getItem("@WebChat:nickname") ? stringToColour(props.author) : '#40a9ff'};
    width: 70%;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    float:  ${props => props.meh ? 'right' : 'left'};
    color:  ${props => props.meh ? '#3F3F3F' : 'white'};
`

const MessageAuthor = styled.div`
    width: 100%;
`
const MessageContent = styled.div`
    width: 100%;
    margin-top: 5px;
`

export default Message