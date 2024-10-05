import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import images
import hero1 from '../../Assetes/hero-carousel/hero-carousel-1.jpg';
import hero2 from '../../Assetes/hero-carousel/hero-carousel-2.jpg';
import hero3 from '../../Assetes/hero-carousel/hero-carousel-3.jpg';
import hero4 from '../../Assetes/hero-carousel/hero-carousel-4.jpg';
import hero5 from '../../Assetes/hero-carousel/hero-carousel-5.jpg';

import "./Home.css";

const Home = () => {
    return (
        <section id="hero" className="hero section bg-dark text-white">
            <div
                id="hero-carousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                <div className="carousel-inner">

                    {/* Carousel item 1 */}
                    <div className="carousel-item active">
                        <div
                            className="d-block w-100 carousel-background"
                            style={{
                                backgroundImage: `url(${hero1})`,
                            }}
                        >
                        </div>
                    </div>

                    {/* Carousel item 2 */}
                    <div className="carousel-item">
                        <div
                            className="d-block w-100 carousel-background"
                            style={{
                                backgroundImage: `url(${hero2})`,
                            }}
                        >
                        </div>
                    </div>

                    {/* Carousel item 3 */}
                    <div className="carousel-item">
                        <div
                            className="d-block w-100 carousel-background"
                            style={{
                                backgroundImage: `url(${hero3})`,
                            }}
                        >
                        </div>
                    </div>

                    {/* Carousel item 4 */}
                    <div className="carousel-item">
                        <div
                            className="d-block w-100 carousel-background"
                            style={{
                                backgroundImage: `url(${hero4})`,
                            }}
                        >
                        </div>
                    </div>

                    {/* Carousel item 5 */}
                    <div className="carousel-item">
                        <div
                            className="d-block w-100 carousel-background"
                            style={{
                                backgroundImage: `url(${hero5})`,
                            }}
                        >
                        </div>
                    </div>

                    {/* Fixed Caption */}
                    <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                        <h1>Welcome to JSR Group</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#get-started" className="btn-custom">
                            Get Started
                        </a>
                    </div>

                </div>

                {/* Carousel controls */}
                <a
                    className="carousel-control-prev"
                    href="#hero-carousel"
                    role="button"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#hero-carousel"
                    role="button"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>
            </div>
        </section>
    );
};

export default Home;
