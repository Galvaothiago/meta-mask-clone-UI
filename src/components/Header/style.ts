import styled from 'styled-components'
import { colors } from '../../global'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.mediumGrayColorBackground};
`
export const ContainerHeader = styled.header`
    max-width: 1560px;
    width: 100%;
    height: 4.7rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    svg { 
        cursor: pointer;
    }

    @media(max-width: 1800px) {
        max-width: 1160px;
    }

    @media(max-width: 1366px) {
        max-width: 1050px;
    }

    @media(max-width: 999px) {
        max-width: 850px;
    }

    @media(max-width: 576px) {
        max-width: 700px;
        padding: 0 1rem;
    }
`

export const FillBackgroundHeader = styled.div`
    width: 100%;
    height: 2rem;
    background-color: ${colors.mediumGrayColorBackground};
`
export const Info = styled.div`
    width: 11.5rem;
    height: 1.9rem;

    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
`