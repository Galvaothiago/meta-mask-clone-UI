import { useState } from 'react'

import { AccountInfo, Container, MessageCopy } from "./style"
import { IoMdMore } from 'react-icons/io'
import { ReactComponent as CopyIcon } from '../../svg/copyicon.svg'

const ACCOUNT_NUMBER = "0x5BccE5A4ae103e8eSDb6535781E661A21c533Fb6"

export const Account: React.FC = () => {
    const [ textCopy, setTextCopy ] = useState<String>("Copy to clipboard!")

    const trucateNumberAccount = (accountNumber: String): String => {
        const totalLetters = accountNumber.length

        const partFirst = accountNumber.substring(0, 5)
        const partSecond = accountNumber.substring((totalLetters - 4), totalLetters)

        return `${partFirst}...${partSecond}`
    }

    const copyCodeToClipboard = () => {
        if(!navigator.clipboard) {
            setTextCopy("Do not supported")
            return
        }

        navigator.clipboard.writeText(ACCOUNT_NUMBER)
        setTextCopy("Copied!")

        setTimeout(() => {
            setTextCopy("Copy to clipboard")
        }, 4500)
    }

    return (
        <Container>
            <span>{/*created tag just to fill the space (using zero opacity)*/}</span>
            <AccountInfo onClick={copyCodeToClipboard}>
                <p>Account 1</p>
                <div>
                    <span>{trucateNumberAccount(ACCOUNT_NUMBER)}</span>
                    <CopyIcon />
                </div>
                <MessageCopy position={String(textCopy)}>{textCopy}</MessageCopy>
            </AccountInfo>
            <IoMdMore />
        </Container>
    )
}