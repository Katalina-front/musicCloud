import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";

export const ArtistCard = () => {
  return (
    <div className="container">
      <div className="cover">
        <img src="/" />
      </div>
      <div className="music-info">
        <div className="name">Name</div>
        <div className="traks">
          <div className="image">
            <img src="/" />
          </div>
          <div className="name">
            <p className="traks-name">Название трека</p>
            <p className="albums-name">Название Альбома</p>
          </div>
          <button>
            <PlayCircleOutlineRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
