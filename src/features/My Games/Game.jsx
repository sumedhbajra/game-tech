import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 25vh;
`;

const CardImage = styled.img`
  width: 100%;
  height: 10vh;
`;

const CardContent = styled.div`
  padding: 8px;
`;

const GameName = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
`;

const PlayButton = styled.button`
  background-color: #ff1203;
  color: white;
  border: none;
  font-weight: bold;
  padding: 5px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
`;

function Game({ name }) {
  return (
    <Card>
      <CardImage src="public/View Games/saga.jpg" alt="saga" />
      <CardContent>
        <GameName>Clash Royale</GameName>

        <div className="flex justify-start items-center">
          <PlayButton>Play</PlayButton>
          <StarRating>
            {/* <AiFillStar color="#FFD700" />
          <AiFillStar color="#FFD700" />
          <AiFillStar color="#FFD700" />
          <AiFillStar color="#FFD700" />
          <AiFillStar color="#FFD700" /> */}
          </StarRating>
        </div>
      </CardContent>
    </Card>
  );
}

export default Game;
