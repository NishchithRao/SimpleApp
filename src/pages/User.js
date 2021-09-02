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
                data.map(item => <div key={item.id}>
                    <span style={{padding:"20px"}}>ID: {item.id}</span>
                    <span>{item.name}</span></div>)
            }
        </div>
    )
}

export default User
