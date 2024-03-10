import { useParams } from "react-router-dom";
import MovieData from "../../MovieData.json";
import { Container, display } from "@mui/system";
import { Button } from "@mui/material";

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
        <div>
          <img style={{ width: "200px" }} src={movie.url} alt={movie.title} />
        </div>
      </Container>
    </>
  );
}

export default MoviePage;
