import { useParams } from "react-router-dom";
import "./SongDetails.css";
import BasicMenu from "../Menu/Menu";
import { SongInfo } from "../UI/SongInfo/SongInfo";
import { useGetSongsDetailsQuery } from "../../store/api/searchApi";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";

export const SongDetails = () => {
  const { song_id } = useParams(); // Получаем параметр id из URL
  const { data, isFetching, error } = useGetSongsDetailsQuery(song_id || ''); // Отправляем запрос на сервер, используя id
  console.log(song_id);
  
  if (isFetching) return <Loader title="Loading..."/>;
  if (error) return <Error/>;

  const song = data?.lyrics;

  return (
    <div className="details">
      <BasicMenu />
      <div className="songinfo">
        {song && (
          <SongInfo
            key={song.song_id}
            songName={song.tracking_data.title}
            artistName={song.tracking_data.primary_artist}
            lyricsText={song.lyrics.body.html}
          />
        )}
      </div>
    </div>
  );
};
