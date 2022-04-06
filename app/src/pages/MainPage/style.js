import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
    width: 300px;
    height: 400px;
    background-color: #FFF;
    margin: 0 auto;
    border-radius: 5px;
    -webkit-box-shadow: 0px 4px 15px -3px #000000; 
    box-shadow: 0px 4px 15px -3px #000000;

    input {
        display: block;
        padding: 15px;
        border-radius: 5px;
        border: 1px #CCC solid;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    button {
        display: block;
        padding: 10px;
        background-color: #0092ff;
        border-radius: 5px;
        color: #FFF;
        border-color: transparent;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        padding: 10px 60px;
        font-weight: 700;
    }

    button:hover {
        opacity: 0.9;
    }

    ul {
        color: #093679;
        list-style: none;
        margin-top: 30px;
        text-align: center;
        line-height: 1.8;
    }

    label {
        font-weight: bold;
    }
`