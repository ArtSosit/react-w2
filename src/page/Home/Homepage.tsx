import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./homepage.css"; // Import CSS file

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
                to={`/movie/${movie.id}`}
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
                    <p className="movie-title">{movie.title}</p>
                    <p className="movie-rating">Rating: {movie.rating}</p>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          {actorData.map((actor) => (
            <div
              key={actor.id}
              style={{
                margin: "10px",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  border: "2px solid white",
                  backgroundColor: "#292929",
                }}
              >
                <div style={{ backgroundColor: "#292929", padding: "10px" }}>
                  <p style={{ fontSize: "12px", margin: "0" }}>{actor.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Homepage;
