import React, { Component } from 'react'
import { Avatar } from 'antd'

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