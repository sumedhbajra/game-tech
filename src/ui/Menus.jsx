import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const MenuContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;
  return (
    <MenuContext.Provider
      value={{ close, open, openId, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Menu() {
  return <div></div>;
}

function Toggle({ id }) {
  const { open, close, openId, position, setPosition } =
    useContext(MenuContext);

  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    console.log(openId);
    console.log(id);

    // Don't understand this.
    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List() {
  return <div></div>;
}

function Button() {
  return <div></div>;
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
