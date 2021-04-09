import React from 'react'
import { Geo } from "../../../redux/users/usersTypes";

interface ObjectKeysCProps {
    value: string | number
    keyValue: string
}

export const ObjectKeysC: React.FC<ObjectKeysCProps> = ({value, keyValue}) => {
    return <div>
        <div>
            <b>{keyValue}:</b> <div>{value}</div>
        </div>
    </div>
}