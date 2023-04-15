import React from 'react';
import { ChannelContext, UserContext } from '../../App';

const ComponentF = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div>Without hook - User context value {user}, channel context value {channel}</div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF;