import { GiTank } from "react-icons/gi";
import styled from "styled-components";
import Game from "./Game";

function GameList() {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="flex items-center justify-start gap-2 uppercase font-bold text-2xl w-[80vh] border-b-2 border-gray-200">
        <span>
          <GiTank color="#ff1203" />
        </span>
        <span>War Zone</span>
      </div>
      <div className="mt-10">
        {/* Game list here */}
        <Game />
      </div>
    </div>
  );
}

export default GameList;
