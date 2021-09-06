import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../App.css'

const EvenUser = ({ history }) => {
    const { oddData } = useSelector(state => state);
    const [hasData,setHasData] = useState(true);
    useEffect(() => {
        if (!oddData[0]) {
            setHasData(false);
        }
    }, [oddData, history]);
    return (
        <div className="users" style={{textAlign:'center'}}>
            {
                !hasData && <div>
                    <h1>API Fetch</h1>
                    <h2>Data Not Fetched</h2>
                    <Link to="/">Home</Link>
                    </div>
            }
            {hasData &&<Link style={{marginInline:'auto',width:"fit-content"}} to="/even">Even Users</Link>}
            <ul>
            {
                oddData.map(item => <li key={item.id}>
                    <span style={{padding:"20px"}}>{item.userId}</span>
                    <span className="title">{item.title}</span>
                    <span>{item.body}</span></li>
                    )
            }
            </ul>
        </div>
    )
}

export default EvenUser
