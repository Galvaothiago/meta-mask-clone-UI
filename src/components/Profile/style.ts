import styled from 'styled-components'
import { colors } from '../../global'

interface ImageProp {
    url: string
}

export const BorderLine = styled.div`
    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    border-radius: 50%;
    border: 2px solid ${colors.blueColorLetters};

    cursor: pointer;
`

export const Image = styled.div<ImageProp>`
    width: 32px;
    height: 32px;

    border-radius: 50%;
    background-image: url(${({ url }) => url});
    background-size: 100%;
`