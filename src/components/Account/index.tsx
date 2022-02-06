import { useState } from 'react'

import { AccountInfo, Container, Message } from "./style"
import { IoMdMore } from 'react-icons/io'
import { FiCopy } from 'react-icons/fi'

const ACCOUNT_NUMBER = "0x5BccE5A4ae103e8eSDb6535781E661A21c533Fb6"

export const Account: React.FC = () => {
    const [ textCopy, setTextCopy ] = useState<String>("Copy to clipboard!")

    const handleCopyClick = () => {
        setTextCopy("Copied!")

        setTimeout(() => {
            setTextCopy("Copy to clipboard")
        }, 4500)
    }

    const trucateNumberAccount = (accountNumber: String): String => {
        const totalLetters = accountNumber.length

        const partFirst = accountNumber.substring(0, 5)
        const partSecond = accountNumber.substring((totalLetters - 4), totalLetters)

        return `${partFirst}...${partSecond}`
    }

    return (
        <Container>
            <span>test</span>
            <AccountInfo onClick={handleCopyClick}>
                <p>Account 1</p>
                <div>
                    <span>{trucateNumberAccount(ACCOUNT_NUMBER)}</span>
                    <FiCopy />
                </div>
                <Message position={String(textCopy)}>{textCopy}</Message>
            </AccountInfo>
            <IoMdMore />
        </Container>
    )
}