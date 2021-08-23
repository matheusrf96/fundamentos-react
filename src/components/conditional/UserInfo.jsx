import React from 'react'
import If, { Else } from './If'

const UserInfo = (props) => {
    return (
        <div>
            <If test={ props.user && props.user.name }>
                Seja bem-vindo, <strong>{ props.user.name }</strong>!
                <Else>
                    Seja bem-vindo, <strong>Camarada</strong>!
                </Else>
            </If>
        </div>
    )
}

export default UserInfo
