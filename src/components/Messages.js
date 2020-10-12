
import React from 'react';

class Messages extends React.Component{
    render(){
        const {nick,message}=this.props;
        return <li>
            <b>{nick}:</b>
            {message}
        </li>;
    }
}

export default Messages;