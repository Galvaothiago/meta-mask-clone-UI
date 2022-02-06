import { BorderLine, Image } from "./style";

export const Profile: React.FC = () => {
    const URL_PROFILE = "https://github.com/Galvaothiago.png"

    return (
        <BorderLine>
            <Image url={URL_PROFILE}/>
        </BorderLine>
    )
}