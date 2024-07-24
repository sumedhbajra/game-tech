import { BiCompass, BiSolidCompass, BiSolidUserAccount } from "react-icons/bi";
import { GiBasketballBall, GiConsoleController, GiTank } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

function GameHeader() {
  return (
    <Header>
      <Logo />
      <GameFilterBar />
      <BiSolidUserAccount size={30} />
    </Header>
  );
}

function GameFilterBar() {
  return (
    <span className="flex gap-10 items-center font-semibold uppercase px-8 py-2  shadow-2xl rounded-full">
      <NavLink className="flex gap-1 ">
        <span>
          <BiSolidCompass size={25} />
        </span>
        <span>Explore</span>
      </NavLink>
      <NavLink className="flex gap-1">
        <span>
          <GiTank size={25} />
        </span>
        <span>War</span>
      </NavLink>
      <NavLink className="flex gap-1">
        <span>
          <GiBasketballBall size={25} />
        </span>
        <span>Sports</span>
      </NavLink>
    </span>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center gap-3 ">
      <span>
        <GiConsoleController size={40} color="#ff1203" />
      </span>
      <span className="font-bold uppercase text-[25px]">
        Gaming <br /> Galaxy
      </span>
    </div>
  );
}

export default GameHeader;
