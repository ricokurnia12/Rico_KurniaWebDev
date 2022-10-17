import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Db from '../Db/AnimeDb.json';
import Char from '../Db/CharacterDb.json';
const Detail = () => {
  const { id } = useParams();
  // const { judul } = useParams();
  const [data, setData] = useState([]);
  const [overview, setOverview] = useState(true);
  const [review, setReview] = useState(false);
  const [character, setCharacter] = useState(false);

  useEffect(() => {
    const filter = Db.filter((item) => {
      return item.Id === id;
    });
    console.log(filter, 'ini filter');
    setData(filter);
  }, []);

  function handleOverview() {
    setOverview(true);
    setReview(false);
    setCharacter(false);
  }

  function handleReview() {
    setOverview(false);
    setReview(true);
    setCharacter(false);
  }

  function handleCharacter() {
    setOverview(false);
    setReview(false);
    setCharacter(true);
  }

  console.log(id, 'ini id');

  return (
    <div className="">
      <div>
        <img
          src={`/BannerDetail/${data[0]?.Gambar}.png`}
          alt={data[0]?.Gambar}
          width="100%"
        />
      </div>
      <div>
        <div className="container mt-4">
          <nav className="nav nav-pills nav-justified">
            <a
              className="nav-item nav-link"
              style={
                overview
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      backgroundColor: 'red',
                    }
                  : {}
              }
              href="#"
              onClick={handleOverview}
            >
              Overview
            </a>
            <a
              className="nav-item nav-link"
              style={
                character
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      backgroundColor: 'red',
                    }
                  : {}
              }
              onClick={handleCharacter}
              href="#"
            >
              Character
            </a>
            <a
              className="nav-item nav-link"
              style={
                review
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      backgroundColor: 'red',
                    }
                  : {}
              }
              onClick={handleReview}
              href="#"
            >
              Action
            </a>
          </nav>
        </div>
        {overview && (
          <div className="container">
            <div className="row mt-5">
              <h3>Synopsis</h3>
              <p>{data[0]?.Synopsis}</p>
            </div>

            <div>
              <h3>Movie Info</h3>
              <p>
                <b>Release Date:</b> {data[0]?.Relase}
              </p>
              <p>
                <b>Director:</b> {data[0]?.Director}
              </p>
              <p>
                <b>Featured Song:</b> {data[0]?.FeaturedSong}
              </p>

              <p>
                <b>Budget:</b> {data[0]?.Budget}
              </p>
            </div>
          </div>
        )}

        {character && (
          <div>
            <h1>caharacter</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
