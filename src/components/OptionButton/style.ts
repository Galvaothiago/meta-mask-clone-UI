import styled from "styled-components";
import { colors } from "../../global";

export const Container = styled.div`
    width: 100%;
    height: 3.1rem;
    display: flex;

    background-color: ${colors.whiteColorBackground};
    margin-top: -.12rem;

    -webkit-box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.1);
    box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.1);

`

export const Button = styled.button`
    flex: .5;
    border: none;
    background-color: ${colors.whiteColorBackground};

    color: ${colors.blueColorLetters};
    font-size: .9rem;
    font-weight: 400;
    cursor: pointer;
`