import React from 'react';

const Footer = () => {
  return (
    <div>
      <section className="">
        {/* Footer */}
        <footer className="bg-dark text-white text-center text-md-start">
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <img
                  src={'/Footer/Logo.png'}
                  alt=""
                  srcset=""
                  width={'200px'}
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Iste atque ea quis molestias. Fugiat pariatur
                  maxime quis culpa corporis vitae repudiandae aliquam
                  voluptatem veniam, est atque cumque eum delectus
                  sint!
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Karir
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Pusat Media
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Download</h5>
                <div className="row mt-2">
                  <div className="col-lg-6">
                    <img
                      src={'/Footer/playstore.png'}
                      alt="playstore"
                      width={'150px'}
                    />
                  </div>
                  <div className="col-lg-5 ms-1">
                    <img
                      src={'/Footer/apple.png'}
                      alt=""
                      width={'150px'}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <h5 className="text-uppercase">Social Media </h5>
                  <div className="col-lg-3 ">
                    <img
                      src={'/Footer/facebook.png'}
                      alt=""
                      srcset=""
                      width={'60px'}
                    />{' '}
                  </div>
                  <div className="col-lg-3 mt-2">
                    <img
                      src={'/Footer/pinterest.png'}
                      alt=""
                      srcset=""
                      width={'60px'}
                    />{' '}
                  </div>

                  <div className="col-lg-3 mt-2">
                    <img
                      src={'/Footer/instagram.png'}
                      alt=""
                      srcset=""
                      width={'60px'}
                    />{' '}
                  </div>
                </div>
              </div>
              {/*Grid column*/}
            </div>

            {/*Grid row*/}
          </div>

          {/* Grid container */}
          {/* Copyright */}

          <div
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            Copyright © 2000-2022 AnimeTV.
            <a className="text-white" href="https://mdbootstrap.com/">
              All Rights Reserved
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </section>
    </div>
  );
};

export default Footer;
