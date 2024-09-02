import React from "react";
import { AiFillFire } from "react-icons/ai";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  align-items: start;
  margin-top: 20px;
`;

const GridItem1 = styled.img`
  height: 25vh;
  width: auto;
  grid-column: 1 / span 2;
  grid-row: 1;
`;

const GridItem2 = styled.img`
  height: 52vh;
  width: auto;
  grid-column: 3;
  grid-row: 1 / span 2;
`;

const GridItem3 = styled.img`
  height: 25vh;
  width: auto;
  grid-column: 1 / span 2;
  grid-row: 2;
`;
function TrendingGames() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex items-center gap-1 uppercase font-bold text-2xl w-[80vh] border-b-2 border-gray-200">
          <span>
            <AiFillFire color="#ff1203" />
          </span>
          <h3>Trending Games</h3>
        </div>

        <GridContainer>
          <GridItem1 src="public/View Games/saga.jpg" alt="Saga" />
          <GridItem2
            src="public/View Games/clash-royale.jpg"
            alt="Clash Royale"
          />
          <GridItem3
            src="public/View Games/morden-warfare.jpg"
            alt="Modern Warfare"
          />
        </GridContainer>
      </div>
    </div>
  );
}

export default TrendingGames;
