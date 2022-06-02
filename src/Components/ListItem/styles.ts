import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color:#4D4C7D ;
    padding: 10px;
    border-radius: 30px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #E9D5DA;
        font-size: 18px;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    button {
        margin-left: auto;
        margin-right: 10px;
        background: transparent;
        border: none;
    }

    img {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`
))
