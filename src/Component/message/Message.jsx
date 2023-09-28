import React from 'react'

function Message(props) {
    return (
     props.message&& <div class="alert alert-dark" role="alert" style={{margin:'10px 0px'}} >
            { props.message.message}
        </div>
    )
}

export default Message
