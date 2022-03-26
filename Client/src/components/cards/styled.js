import styled from "styled-components";

export const CardItem = styled.div`
    width: 100%;
    height: 80px;
    margin: 5px 0;
    border: 2px solid #1A8CD8;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    p{
        color: #1A8CD8;
        font-size: 18px;
    }
    :hover{
        background-color: rgba(255, 255, 255, 0.400);
    }
`
export const Titulo = styled.div`
    overflow: hidden;
`
export const Autor = styled.div`
    overflow: hidden;
`
export const Conteudo = styled.div`
    overflow: hidden;
`