import { AppHeading } from "../UI/AppHeading/AppHeading";
import { KindMix } from "../KindMix/KindMix";
import "./MusicPage.css"
import BasicMenu from "../Menu/Menu";
import { ArtistMix } from "../ArtistMix/ArtistMix";
import { MusicTop } from "../MusicTop/MusicTop";


export const MusicPage = () => {
    const savedUsername = localStorage.getItem("username");
    return (
        <div className="Page">
            <div className="welcome">
              <AppHeading headingText={`Добро пожаловать ${savedUsername}` } headingType={"h1"} />
              <BasicMenu/> 
            </div>
            <KindMix/>
            <ArtistMix/>
            <MusicTop/>
        </div>
    )
}