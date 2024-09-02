import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function SideBar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}

export default SideBar;
