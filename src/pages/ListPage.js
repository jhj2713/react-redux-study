import React, { useState } from 'react'
import styled from 'styled-components'

const StyledItemBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    height: 100px;
    margin: 20px;
`;

function ListPage() {
    const [Posts, setPosts] = useState([
        {id: "1", title: "내용1"},
        {id: "2", title: "내용2"},
        {id: "3", title: "내용3"},
        {id: "4", title: "내용4"},
        {id: "5", title: "내용5"},
    ])

    return (
        <div>
            <h1>글목록</h1>
            {Posts.map((post) => (
                <StyledItemBox>
                    <div>번호 : {post.id}, 제목 : {post.title}</div>
                    <button>삭제</button>
                </StyledItemBox>
            ))}
        </div>
    )
}

export default ListPage
