import styled from 'styled-components'

export const AllContent = styled.main`
    margin: auto;
    width: 98%;
    max-width: 1500px;
    height: fit-content;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export const ContainerRegister = styled.section`
    margin: auto;
    margin-top: 10px;
    max-width: 450px;
    width: 100%;
    height: 270px;
    border: 2px solid #1A8CD8;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
export const TittlePage = styled.h1`
    padding: 20px 0;
    font-size: 27px;
`
export const Form = styled.form`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const Input = styled.input`
    width: 80%;
    padding: 5px;
    outline: none;
`
export const Button = styled.button`
    width: 80px;
    padding: 5px;
    background-color: #E8F0FE;
    :hover{
        background-color: #fff;
    }
`
export const AllCards = styled.section`
    margin: 20px 0;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
`