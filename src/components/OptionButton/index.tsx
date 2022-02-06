import { useState } from "react"
import { colors } from "../../global"
import { Button, Container } from "./style"

export const OptionButton: React.FC = () => {
    const options = ["Assets", "Activity"]
    const [ borderOption, setBorderOption] = useState(options[0])
    const optionStyle = {
        
    }
    const handleBorderButton = (option: string) => {
        setBorderOption(option)
    }
    return (
        <Container>
            { options.map(option => (
                <Button 
                    style={{ borderBottom: `${borderOption === option ? `2px solid ${colors.blueColorLetters}` : ''}`, 
                            color: `${borderOption === option ? `${colors.blueColorLetters}` : ''}`}} 
                    onClick={() => handleBorderButton(option)}
                >{option}</Button>
            )) }
        </Container>
    )
}