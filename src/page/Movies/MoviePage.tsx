import { useParams } from "react-router-dom";
import MovieData from "../../MovieData.json";
import { Container, display } from "@mui/system";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import "./MoviePage.css";
import img from "../../assets/image.png";
function MoviePage() {
  const params = useParams();
  let name = params.name;

  console.log(name);

  let movie = null;

  // Find the movie with the given name
  for (let i = 0; i < MovieData.length; i++) {
    if (MovieData[i].title === name) {
      movie = MovieData[i];
      console.log(movie);
      break;
    }
  }

  return (
    <>
      <Container style={{ maxWidth: "1000px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <div style={{}}>
            <span>{movie.title}</span>
            <div style={{ display: "flex" }}>
              <div>{movie?.releaseYear}</div>
              <div>
                <li style={{}}>{movie?.runtime}</li>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "320px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span style={{ fontSize: "10px" }}>IMDb RATING</span>
              <span style={{ fontSize: "10px" }}>YOUR RATING</span>
              <span style={{ fontSize: "10px" }}>POPULARITY</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button style={{ fontSize: "10px" }}>{movie?.rating}</Button>
              <Button style={{ fontSize: "10px" }}>RATE</Button>
              <Button style={{ fontSize: "10px" }}>IMDb RATING</Button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "200px", margin: "2px" }}
            src={movie.url}
            alt={movie.title}
          />
          <iframe
            style={{ height: "299px", width: "60%", margin: "2px" }}
            src={movie?.video}
          ></iframe>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                backgroundColor: "#3a3a3a",
                width: "170px",
                height: "50%",
                margin: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={img}
                alt="Icon"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div
              style={{
                backgroundColor: "#3a3a3a",
                width: "170px",
                height: "50%",
                margin: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={img}
                alt="Icon"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>
        </div>
        {/* Movie Info */}
        <div>
          {/* <h2>Movie Info</h2> */}
          <p>{movie?.info}</p>
          <hr />
          <p>
            Director: <Link to={`/actor/${movie?.actor}`}>{movie?.actor}</Link>
          </p>
        </div>
      </Container>
    </>
  );
}

export default MoviePage;
