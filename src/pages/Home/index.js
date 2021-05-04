import React from 'react';
import { Link } from "react-router-dom";

const index = () => {
    return (
        <div className="custom_container">
            <Link to="/login">login</Link>
        </div>
    )
}

export default index
