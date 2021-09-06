import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../App.css'

const EvenUser = ({ history }) => {
    const { evenData } = useSelector(state => state);
    const [hasData,setHasData] = useState(true);
    useEffect(() => {
        if (!evenData[0]) {
            setHasData(false);
        }
    }, [evenData, history]);
    return (
        <div className="users" style={{textAlign:'center'}}>
            {
                !hasData && <div>
                    <h1>API Fetch</h1>
                    <h2>Data Not Fetched</h2>
                    <Link to="/">Home</Link>
                    </div>
            }
            {hasData &&<h1>Users</h1>}
            <ul>
            {
                evenData.map(item => <li key={item.id}>
                    <span style={{padding:"20px"}}>{item.userId}</span>
                    <span className="title">{item.title}</span>
                    <span>{item.body}</span></li>)
            }
            </ul>
        </div>
    )
}

export default EvenUser
