import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = styled.div`
  font-size: 1.6rem;
  padding: 1.5rem 1.2rem;
  border: 1px solid var(--color-grey-100);

  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);

  display: flex;
  gap: 8px;
  width: 100%;
`;

function EmployeeSearch() {
  return (
    <SearchBar>
      <BiSearchAlt2 size={30} />
      <input className="focus:outline-none text-[20px]" />
    </SearchBar>
  );
}

export default EmployeeSearch;
