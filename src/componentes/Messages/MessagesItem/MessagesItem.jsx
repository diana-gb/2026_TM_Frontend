import React from 'react'
import './MessagesItem.css'

const MessagesItem = ({message}) => {
                    const username = message.fk_id_member?.fk_id_user?.username
                    const content = message.message

                    return(
                        <div className='message-item'>
                        
                        <div className="message-avatar">
                            {username?.charAt(0).toUpperCase()}
                        </div>

                            <div className='message-content'>
                                <span className='message-username'>{username}</span>
                                <p className='messsage-text'>{content}</p>
                            </div>
                        </div>
                    )
}

export default MessagesItem