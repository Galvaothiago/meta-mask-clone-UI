import styled from 'styled-components'
import { colors } from '../../global'

export const Container = styled.main`
    width: 100%;
    height: 13.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.3rem;

    padding: .7rem 0;

    background-color: ${colors.whiteColorBackground};

    -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.1);

    img {
        width: 30px;
        border-radius: 50%;
        border: 1px solid ${colors.grayBorderColor};
    }

    span {
        font-size: 2rem;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    > div:nth-child(1) {
      filter: opacity(40%);
      cursor: not-allowed;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .4rem;

    cursor: pointer;

    p {
        font-size: .9rem;
        font-weight: 400;
        color: ${colors.blueColorLetters};
    }

`

export const Icon = styled.div`
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;

    background-color: ${colors.blueColorLetters};
    color: ${colors.whiteColorBackground};
    
    border-radius: 50%;

    svg {
        font-size: 1.25rem;
    }
`