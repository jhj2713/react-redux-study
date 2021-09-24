import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease, increase } from '../store';
import '../App.css'

function Footer(props) {
    const dispatcher = useDispatch();

    return (
        <div className="sub_container">
            <h1>footer</h1>
            <button onClick={() => dispatcher(increase("increase"))}>증가</button>
            <button onClick={() => dispatcher(decrease())}>감소</button>
        </div>
    )
}

export default Footer
