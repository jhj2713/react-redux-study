import React from 'react'
import styled from 'styled-components'

const HeaderList = styled.div`
    border: 1px solid black;
    height: 100px;
`;

function Header() {
    return (
        <div>
            <HeaderList>
                <ul>
                    <li>메뉴1</li>
                    <li>메뉴2</li>
                </ul>
            </HeaderList>
        </div>
    )
}

export default Header
