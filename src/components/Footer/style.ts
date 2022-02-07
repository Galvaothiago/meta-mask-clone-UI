import styled from 'styled-components'
import { colors } from '../../global'

export const Container = styled.footer`
    width: 100%;
    height: 4.5rem;
    display: grid;
    place-items: center;

    background-color: ${colors.whiteColorBackground};
    margin-top: -.12rem;

    -webkit-box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.1);
    box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.1);

    p {
        color: ${colors.lightColorLetters};

        span {
            color: ${colors.blueColorLetters};
            cursor: pointer;
        }
    }

`