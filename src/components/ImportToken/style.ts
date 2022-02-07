import styled from 'styled-components'
import { colors } from '../../global'

export const Container = styled.section`
    width: 100%;
    min-height: 5.7rem;
    height: 11rem;

    padding: 1.5rem;
    display: flex;
    align-items: start;
    justify-content: center;

    background-color: ${colors.whiteColorBackground};

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;

        font-size: .9rem;

        p {
            color: ${colors.lightColorLetters};
        }

        span {
            color: ${colors.blueColorLetters};
            transition: filter .2s;


            &:hover {
                filter: brightness(1.3);
                cursor: pointer;
            }
        }
    }
`