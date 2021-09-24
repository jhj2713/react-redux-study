import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <ul>
            <li><Link to="/">글목록</Link></li>
            <li><Link to="/write">글쓰기</Link></li>
        </ul>
    )
}

export default NavBar
