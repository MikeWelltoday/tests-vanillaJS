import React, {FC} from 'react'

//===============================================================================================================================================================

//===============================================================================================================================================================

export const User: FC = () => {

    function deleteUser(event: React.MouseEvent<HTMLButtonElement>) {
        console.log(event.currentTarget)
    }

    return (
        <div>
            <span>Dimich</span>
            <button name={'del'} onClick={deleteUser}>del</button>
            <button name={'add'} onClick={deleteUser}>add</button>
        </div>
    )
}

