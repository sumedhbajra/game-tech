import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.6rem;
  padding: 1.5rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function Select({ options, value, onChange, ...props }) {
  console.log(value);
  return (
    <StyledSelect value={value} {...props} onChange={onChange}>
      {options.map((option, key) => (
        <option value={option.value} key={key}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
