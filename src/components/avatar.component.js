import React, { Component } from 'react'
import { Avatar } from 'antd'

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

class AvatarUser extends Component {
    render() {
        return (
            <Avatar size={this.props.size}
                style={{ marginRight: '10px', background: ('white'), color: 'black', fontSize: this.props.fontSize }}
            >
                {(!!this.props.user) && this.props.user.substring(0, 2).toUpperCase()}
            </Avatar>
        )
    }
}

export default AvatarUser