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
    const [Num, setNum] = useState(6)
    const [Post, setPost] = useState({id: "", title: "", content: ""})
    const [Posts, setPosts] = useState([
        {id: "1", title: "제목1", content: "내용1"},
        {id: "2", title: "제목2", content: "내용2"},
        {id: "3", title: "제목3", content: "내용3"},
        {id: "4", title: "제목4", content: "내용4"},
        {id: "5", title: "제목5", content: "내용5"},
    ])

    const handleWrite = () => {
        setPosts([...Posts, Post])
        setNum(Num + 1)
    }
    const changeInput = (e) => {
        setPost({ ...Post, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1>글목록</h1>
            <hr/>
            <form>
                <input 
                    type="text" 
                    name="title"
                    value={Post.title} 
                    placeholder="제목을 입력하세요"
                    onChange={changeInput}
                />
                <input 
                    type="text" 
                    name="content"
                    value={Post.content} 
                    placeholder="내용을 입력하세요"
                    onChange={changeInput}
                />
                <button type="button" onClick={handleWrite}>글쓰기</button>
            </form>
            {Posts.map((post) => (
                <StyledItemBox>
                    <div>번호 : {post.id}, 제목 : {post.title}, 내용: {post.content}</div>
                    <button>삭제</button>
                </StyledItemBox>
            ))}
        </div>
    )
}

export default ListPage
