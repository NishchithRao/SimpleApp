import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import '../App.css'

const User = ({ history }) => {
    const { data } = useSelector(state => state);
    useEffect(() => {
        if (!data[0]) {
            history.push("/");
        }
    }, [data, history]);
    return (
        <div className="users">
            {
                data.map(item => <span key={item.id}>{item.name}</span>)
            }
        </div>
    )
}

export default User
