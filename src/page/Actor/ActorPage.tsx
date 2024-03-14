import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import ActorData from "../../ActorData.json";
import { Button } from "@mui/material";
import img from "../../assets/image.png";

function ActorPage() {
  const params = useParams();
  let name = params.name;

  console.log(name);

  let actor = null;
  // Find the movie with the given name
  for (let i = 0; i < ActorData.length; i++) {
    if (ActorData[i].name === name) {
      actor = ActorData[i];
      console.log(actor);
      break;
    }
  }
  return (
    <>
      <Container style={{ maxWidth: "1000px" }}>
        <div
          style={{
            backgroundColor: "black",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div style={{}}>
              <span>{actor.name}</span>
              <div style={{ display: "flex" }}>
                {/* <div>
                <li style={{}}>{actor?.runtime}</li>
              </div> */}
              </div>
            </div>
            <div
              style={{
                width: "320px",
              }}
            >
              {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span style={{ fontSize: "10px" }}>IMDb RATING</span>
              <span style={{ fontSize: "10px" }}>YOUR RATING</span>
              <span style={{ fontSize: "10px" }}>POPULARITY</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button style={{ fontSize: "10px" }}>{actor?.rating}</Button>
              <Button style={{ fontSize: "10px" }}>RATE</Button>
              <Button style={{ fontSize: "10px" }}>IMDb RATING</Button>
            </div> */}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "200px", margin: "2px" }}
              src={actor.img}
              alt={actor.name}
            />
            <iframe
              style={{ height: "299px", width: "60%", margin: "2px" }}
              src={actor?.video}
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
            <p>{actor?.info}</p>
            <hr />
            {/* <p>
            Director: <Link to={`/actor/${actor?.actor}`}>{actor?.actor}</Link>
          </p> */}
          </div>
        </div>
      </Container>
    </>
  );
}
export default ActorPage;
