import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const AlbumPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState();
  const [songs, setSongs] = useState();

  const fetchAlbum = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
      if (response.ok) {
        const data = await response.json();
        setAlbum(data);
        setSongs(data.tracks.data);
      } else {
        console.log("Error getting album");
      }
    } catch (error) {
      console.log("Error catching album:", error);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, [id]);

  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col className="col-md-4 pt-5 text-center" id="img-container">
          <img src={album?.cover} class="card-img img-fluid" alt="Album" />
          <div class="mt-4 text-center">
            <p class="album-title">{album?.title}</p>
          </div>
          <div class="text-center">
            <p class="artist-name">{album?.artist.name}</p>
          </div>
          <div class="mt-4 text-center">
            <button id="btnPlay" class="btn btn-success" type="button">
              Play
            </button>
          </div>
        </Col>
        <Col className="col-md-8 p-5">
          <Row>
            <Row className="col-md-10 mb-5" id="trackList">
              {songs &&
                songs.map((song) => (
                  <div class="py-3 trackHover" key={song.id}>
                    <Link to="#" class="card-title trackHover px-3" style={{ color: "white" }}>
                      {song.title}
                    </Link>
                    <small class="duration" style={{ color: "white" }}>
                      {Math.floor(parseInt(song.duration) / 60)}:
                      {parseInt(song.duration) % 60 < 10
                        ? "0" + (parseInt(song.duration) % 60)
                        : parseInt(song.duration) % 60}
                    </small>
                  </div>
                ))}
            </Row>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default AlbumPage;
