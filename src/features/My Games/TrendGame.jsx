import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */
`;

const BackgroundImage = styled.img`
  width: 60%; /* Adjust the width as needed */
  object-fit: cover;
`;

const GunImage = styled.img`
  width: 20%; /* Adjust the width as needed */
  object-fit: contain;
  ${(prop) => {
    console.log("hello");
    prop.rotate && css``;
  }}
`;

function TrendGame() {
  console.log("hello worl");
  return (
    <Container>
      <GunImage src="public/View Games/pubg-guns.png" alt="PUBG Gun" />
      <BackgroundImage
        src="public/View Games/pubg-bg.jpg"
        alt="PUBG Background"
      />
      <GunImage src="public/View Games/pubg-guns.png" alt="PUBG Gun" />
    </Container>
  );
}

export default TrendGame;
