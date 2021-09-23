import React from 'react'
import styled from 'styled-components'

const FooterList = styled.div`
    border: 1px solid black;
    height: 100px;
`;

function Footer() {
    return (
        <div>
            <FooterList>
                <ul>
                    <li>오시는 길 : 서울</li>
                    <li>전화번호 : 010</li>
                </ul>
            </FooterList>
        </div>
    )
}

export default Footer
