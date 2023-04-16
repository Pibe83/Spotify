import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

const ArtistPage = ({ artistName }) => {
  const [artistData, setArtistData] = useState({});
  const dispatch = useDispatch();

  const handleAddToMain = () => {
    dispatch({
      type: 'ADD_IN_MAIN',
      payload: artistData
    });
  };

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        const data = await response.json();
        setArtistData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtistData();
  }, [artistName]);

  return (
    <div>
      <h1>{artistData.name}</h1>
      <img src={artistData.picture_big} alt={artistData.name} />
      <p>{artistData.bio}</p>
      <button onClick={handleAddToMain}>Aggiungi alla mia playlist</button>
    </div>
  );
};

export default ArtistPage;
