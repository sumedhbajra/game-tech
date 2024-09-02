import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";
import Header from "./Header";

function AppLayout() {
  const StyledAppLayout = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 26rem auto;
    height: 100vh;
  `;

  const Main = styled.main`
    grid-column: 2 / 3;
    background-color: var(--color-grey-50);
    padding: 2.5rem 4.8rem 6.45rem;
    overflow: scroll;
  `;

  const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  `;
  return (
    <div>
      <StyledAppLayout>
        <Header />
        <SideBar />

        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </div>
  );
}

export default AppLayout;
