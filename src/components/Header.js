import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'

function Header() {
    const { number, username } = useSelector((store)=> store)

    return (
        <div className="sub_container">
            <h1>header</h1>
            번호 : {number}, 이름 : {username}
        </div>
    )
}

export default Header
