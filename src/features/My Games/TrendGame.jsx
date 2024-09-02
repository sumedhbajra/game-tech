import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  margin: 2cap 0;
  position: relative;
`;

const BackgroundImage = styled.img`
  /* position: absolute; */
  width: auto;
  object-fit: cover;
  border-radius: 50px;
  height: 50vh;
`;

const GunImage = styled.img`
  /* position: absolute; */
  width: auto;
  height: 25vh;
  object-fit: contain;
  display: hidden;
`;

function TrendGame() {
  return (
    <Container>
      <GunImage
        rotate={18}
        src="public/View Games/pubg-guns.png"
        alt="PUBG Gun"
        className={`rotate-45 scale-x-[-1]`}
      />
      <BackgroundImage
        src="public/View Games/pubg-bg.jpg"
        alt="PUBG Background"
        className="z-10"
      />
      <GunImage
        src="public/View Games/pubg-guns.png"
        alt="PUBG Gun"
        className="-rotate-45"
      />
    </Container>
  );
}

export default TrendGame;
