import { Container } from "./style";
import { IoIosHelpCircle } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

export function DropBox() {
    return (
        <Container>
            <IoIosHelpCircle />
            <p>Smart Chain</p>
            <IoIosArrowDown />
        </Container>
    )
}