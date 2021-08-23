import React from 'react'
import If from './If'

const UserInfo = (props) => {
    return (
        <div>
            <If test={ props.user && props.user.name }>
                Seja bem-vindo, <strong>{ props.user.name }</strong>!
            </If>

            <If test={ !props.user || !props.user.name }>
                Seja bem-vindo, <strong>camarada</strong>!
            </If>
        </div>
    )
}

export default UserInfo
