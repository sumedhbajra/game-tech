import { GiConsoleController } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import SearchBar from "../ui/SearchBar";
import styled from "styled-components";

import { BsArrowRight } from "react-icons/bs";
import Button from "../ui/Button";

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 70vh; /* Adjust height as needed */
  overflow: hidden; /* Ensures pseudo-element is contained */
  margin-top: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/home-bg-deco.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.2; /* Adjust opacity here */
    z-index: 1; /* Places the image behind other content */
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      /* Gradient color at the top */ rgba(0, 0, 0, 0) 50%,
      /* Middle transparent */ rgba(0, 0, 0, 0.3) 100%
        /* Gradient color at the bottom */
    );
    z-index: 2; /* Places the gradient on top of the image */
    pointer-events: none; /* Prevents the gradient from interfering with clicks */
  }
`;

const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  height: 60vh;
  z-index: 1;
`;

const ShineEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.677) 10%,
    rgba(255, 255, 255, 0) 40%
  );
  transform: translate(-50%, -50%);
  opacity: 0.7;
  pointer-events: none;
  mix-blend-mode: screen;
`;

const HeroContent = styled.div`
  z-index: 10;
`;

function HomePage() {
  return (
    <div className="bg-[#151932] h-[100vh] pt-3">
      <Header />
      <Content />
    </div>
  );
}

function Header() {
  return (
    <div className="flex gap-5 text-center items-center justify-around">
      {/* Nav Links */}
      <div className="flex gap-5 text-center items-center text-white">
        <GiConsoleController size={40} color="#3351e5" />
        <div className="text-white text-[40px]">|</div>
        <NavLink>Explore</NavLink>
        <NavLink>New</NavLink>
      </div>

      {/* Search Bar */}
      <SearchBar placeHolder="Search new games" />

      {/* Authentication */}
      <Authentication />
    </div>
  );
}

function Authentication() {
  return (
    <div className="text-white flex gap-4">
      <NavLink className="px-5 py-2 bg-[#90919b] rounded-md transition duration-300 ease-in-out hover:bg-[#707184] focus:outline-none focus:ring-2 focus:ring-[#90919b] active:bg-[#6e6f78]">
        Login
      </NavLink>
      <NavLink className="px-5 py-2 bg-[#3e59e4] rounded-md transition duration-300 ease-in-out hover:bg-[#354bdb] focus:outline-none focus:ring-2 focus:ring-[#3e59e4] active:bg-[#3347c0]">
        Signin
      </NavLink>
    </div>
  );
}
function Content() {
  return (
    <Container>
      <div className="flex text-white items-center justify-center">
        <HeroContent>
          <p className="text-[#3351e5] mb-2">Discover Games You Love</p>
          <h1 className="font-bold text-[70px] mb-4">
            GET READY TO <br />
            PLAY
          </h1>
          <button
            className="flex items-center gap-3 bg-[#3351e5] px-5 py-2 rounded-lg text-white font-semibold hover:bg-[#284ab2] focus:outline-none focus:ring-2 focus:ring-[#3351e5] transition-colors duration-300 ease-in-out"
            aria-label="Play Now"
          >
            <span className="text-xl">Play Now</span>
            <BsArrowRight size={30} />
          </button>
        </HeroContent>
        <ImageContainer>
          <Image src="/assets/home-deco.png" alt="Decorative home background" />
          <ShineEffect />
        </ImageContainer>
      </div>
    </Container>
  );
}

export default HomePage;
