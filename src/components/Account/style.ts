import styled, { keyframes } from "styled-components";
import { colors } from "../../global";

interface TextCopyProp {
    position: string
}

const fallEffect = keyframes`
    from {
        transform: translateY(-10px);
        opacity: 0;
    } to {
        transform: translateY(0px);
        opacity: 1;    
    }
 
`

export const Container = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1rem;

    background-color: ${colors.whiteColorBackground};

    -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.1);

    > span {
        opacity: 0;
    }

    svg {
        font-size: 1.5rem;
        cursor: pointer;
    }
`

export const AccountInfo = styled.div`
    width: 22rem;
    height: 3.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .4rem;

    border-radius: 10px;
    cursor: pointer;
    transition: all .2s ;

    position: relative;
   

    div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: .3rem;
        color: ${colors.lightColorLetters};

        span {
           font-size: .75rem;
        }
        
        svg {
            font-size: .75rem;
        }
    }

    &:hover {
        background-color: ${colors.mediumGrayColorBackground};

        div:nth-child(3) {
            display: inline;
            opacity: 1;       
        }
    }
`

export const MessageCopy = styled.div<TextCopyProp>`
    padding: .3rem .7rem;

    background-color: ${colors.darkColorLetters};
    color: white;
    
    font-size: .8rem;

    border-radius: 5px;

    position: absolute;
    bottom: -2.5rem;

    opacity: 0;
    display: none;
    animation: ${fallEffect} .5s;

    &:after {
        content: "";
        width: 12px;
        height: 12px;
        background-color: black;
        transform: rotate(45deg);
        color: white;

        position: absolute;
        right: ${({position}) => position === "Copied!" ? '1.7rem' : '3.5rem'};
        top: -.3rem;
    } 
`