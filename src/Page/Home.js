import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner/bannersaint.png';
import Fullmetal from '../Components/Banner/fullmetal.jpg';
import Demonslayer from '../Components/Banner/demonslayer.png';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import Db from '../Db/AnimeDb.json';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

// function Items({ currentItems }) {
//   return (
//     <div className="items">
//       {currentItems &&
//         currentItems.map((item, index) => (
//           <div key={index}>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </div>
//   );
// }

const Home = () => {
  const itemsPerPage = 15;
  const [items, setItems] = useState([]);
  const [all, setAll] = useState(true);
  const [anime, setAnime] = useState(false);
  const [action, setAction] = useState(false);
  const [adventure, setAdventure] = useState(false);
  const [science, setScience] = useState(false);
  const [comedy, setComedy] = useState(false);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  console.log(currentItems, 'Ini curenst item');
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setItems(Db);
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  function handleAll() {
    setAll(true);
    setAnime(false);
    setAction(false);
    setAdventure(false);
    setScience(false);
    setComedy(false);
  }

  function handleAnime() {
    setAll(false);
    setAnime(true);
    setAction(false);
    setAdventure(false);
    setScience(false);
    setComedy(false);
  }

  function handleAction() {
    setAll(false);
    setAnime(false);
    setAction(true);
    setAdventure(false);
    setScience(false);
    setComedy(false);
  }

  function handleAdventure() {
    setAll(false);
    setAnime(false);
    setAction(false);
    setAdventure(true);
    setScience(false);
    setComedy(false);
  }

  function handleScience() {
    setAll(false);
    setAnime(false);
    setAction(false);
    setAdventure(false);
    setScience(true);
    setComedy(false);
  }

  function handleComedy() {
    setAll(false);
    setAnime(false);
    setAction(false);
    setAdventure(false);
    setScience(false);
    setComedy(true);
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Banner} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Fullmetal} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img
            src={Demonslayer}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
      <div>
        <div className="container">
          <h3 className="mt-3">Browse by Categori</h3>
        </div>
        <div className="container mt-4">
          <nav className="nav nav-pills nav-justified">
            <a
              className="nav-item nav-link"
              style={
                all
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      backgroundColor: 'red',
                    }
                  : {}
              }
              href="#"
              onClick={handleAll}
            >
              All
            </a>
            <a
              className="nav-item nav-link"
              style={
                anime
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      backgroundColor: 'red',
                    }
                  : {}
              }
              onClick={handleAnime}
              href="#"
            >
              Anime
            </a>
            <a
              className="nav-item nav-link"
              style={
                action
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      backgroundColor: 'red',
                    }
                  : {}
              }
              onClick={handleAction}
              href="#"
            >
              Action
            </a>
            <a
              className="nav-item nav-link"
              style={
                adventure
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      backgroundColor: 'red',
                    }
                  : {}
              }
              onClick={handleAdventure}
              href="#"
            >
              Adventure
            </a>
            <a
              className="nav-item nav-link"
              style={
                science
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      backgroundColor: 'red',
                    }
                  : {}
              }
              onClick={handleScience}
              href="#"
            >
              Science Fiction
            </a>
            <a
              className="nav-item nav-link"
              style={
                comedy
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      backgroundColor: 'red',
                    }
                  : {}
              }
              onClick={handleComedy}
              href="#"
            >
              Komedi
            </a>
          </nav>
        </div>

        <div className="mt-1">
          <Container>
            <Row className="justify-content-center">
              {currentItems &&
                currentItems.map((element, index) => {
                  return (
                    <Col className="col-lg-2 col-3 m-1" key={index}>
                      <Link to={`/detail/${element.Id}`}>
                        <Card className=" text-dark AnimeList">
                          <Image
                            src={`/Asset/Cover/${element?.Gambar}.png`}
                            alt="Card image"
                          />

                          <Card.Title>{element?.Judul}</Card.Title>
                          <Card.Text>Anime</Card.Text>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
            </Row>
            {/* <Items currentItems={currentItems} /> */}
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
