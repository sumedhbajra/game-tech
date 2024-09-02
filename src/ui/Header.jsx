import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import AdminSearch from "./AdminSearch";
import Notification from "./Notification";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: 26rem 1fr 0.1fr;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <AdminSearch />
      <span className="flex justify-center items-center">
        <Notification />
      </span>
    </StyledHeader>
  );
}

export default Header;
