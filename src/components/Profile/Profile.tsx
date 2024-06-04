import { ArtistMix } from "../ArtistMix/ArtistMix";
import { KindMix } from "../KindMix/KindMix";
import BasicMenu from "../Menu/Menu";
import { MusicTop } from "../MusicTop/MusicTop";
import { AppHeading } from "../UI/AppHeading/AppHeading";
import "./Profile.css";

export const Profile = () => {
  const savedUsername = localStorage.getItem("username");
  return (
    <div className="profile">
      <BasicMenu />
      <div className="userinfo">
        <img src="./img/photo_2024-03-01_14-46-28.jpg" alt="" />
        <div className="username">
          <AppHeading headingText={`${savedUsername}`} headingType={"h2"} />
          <p>Слушали: 45ч
            <br />
            Просмотрел: 100 текстов
            <br />
            Подписок: 50 подписок   
          </p>
        </div>
      </div>
      <hr />
      <KindMix />
      <ArtistMix />
      <MusicTop />
    </div>
  );
};
