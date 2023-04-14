import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";

const SearchResultPageFetch = () => {
  const [songInfo, setSongInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSong = async () => {
      if (searchQuery) {
        setIsLoading(true);
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}&limit=10`);
        if (response.ok) {
          const data = await response.json();
          setSongInfo(data.data);
        }
        setIsLoading(false);
      }
    };
    fetchSong();
  }, [searchQuery]);

  const handleSearch = (value) => setSearchQuery(value);

  return (
    <Col>
      <SearchBar onSearch={handleSearch} />
      <h2 className="search_title">Search Results</h2>
      {isLoading && <div>Loading...</div>}
      {songInfo.length > 0 && (
        <Row>
          {songInfo.map((song) => (
            <Col key={song.id} xs={12} md={3} className="mb-3">
              <div className="text-center">
                <Link to={`/album/${song.album.id}`}>
                  <img className="img-fluid" src={song.album.cover_medium} alt={song.album.title} />
                </Link>
                <p>
                  <Link to={`/album/${song.album.id}`}>
                    Album: {song.album.title.length ? song.album.title : `${song.album.title}...`}
                  </Link>
                </p>
                <p>
                  <Link to={`/artist/${song.artist.id}`}>Artist: {song.artist.name}</Link>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Col>
  );
};

export default SearchResultPageFetch;
