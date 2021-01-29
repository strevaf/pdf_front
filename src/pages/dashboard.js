import React from 'react';
import { Link } from 'react-router-dom'

function Dashboard(){
    return (
        <div style={{display: 'flex' , flexDirection: 'column'}}>
            <Link to="/document/OWASP">OWASP</Link>
            <Link to="/document/pdf30mb">pdf30mb</Link>
        </div>
    )
}

export default Dashboard