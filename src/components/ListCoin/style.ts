import styled from 'styled-components'
import { colors } from '../../global'

export const Container = styled.div`
    width: 100%;
    height: 5.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;

    background-color: ${colors.whiteColorBackground};

    -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.1);

    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: ${colors.mediumGrayColorBackground};
    }

    > div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    svg {
        font-size: 1.5rem;
        color: ${colors.lightColorLetters};
    }
`

export const Logo = styled.img`
    width: 35px;
    border-radius: 50%;

    border: 1px solid ${colors.grayBorderColor};
`

export const Balance = styled.span`
    font-size: 1rem;
`