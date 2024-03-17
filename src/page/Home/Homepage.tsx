import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./homepage.css"; // Import CSS file
import { Button } from "@mui/material";

function Homepage() {
  const [movieData, setMovieData] = useState([]);
  const [actorData, setActorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("src/MovieData.json");
        setMovieData(response.data);
        const response2 = await axios.get("src/ActorData.json");
        setActorData(response2.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container style={{ maxWidth: "1000px" }}>
        <div>
          <div style={{ margin: "0 10px" }}>
            <p>Top 10 on IMDB this week</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {movieData.map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.title}`}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <div className="movie-container">
                  <div className="movie-card">
                    <img
                      src={movie.url}
                      alt={movie.title}
                      className="movie-image"
                    />
                  </div>
                  <div className="movie-details">
                    <p className="movie-rating">Rating: {movie.rating}</p>
                    <p className="movie-title">{movie.title}</p>
                    <br />
                    <Button
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#3a3a3a",
                        color: "#2986cc",
                        fontSize: "10px",
                      }}
                    >
                      + watchlist
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <br />
      <Container style={{ maxWidth: "1000px" }}>
        <p>born some day</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            gap: "20px",
            padding: "20px",
          }}
        >
          {actorData.map((actor) => (
            <Link
              key={actor.id}
              to={`/actor/${actor.name}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div key={actor.id}>
                <div
                  style={{
                    border: "2px solid white",
                    backgroundColor: "#292929",
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={actor.img}
                    alt={actor.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "10px", textAlign: "center" }}>
                  <p style={{ fontSize: "12px", margin: "0", color: "white" }}>
                    {actor.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Homepage;
