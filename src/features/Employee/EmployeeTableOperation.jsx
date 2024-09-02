import styled from "styled-components";
import SortBy from "../../ui/SortBy";
import EmployeeSearch from "../../ui/EmployeeSearch";

const Operation = styled.div`
  margin-top: 15px;
  display: flex;
`;
function EmployeeTableOperation() {
  return (
    <Operation>
      {/* <Filter
          options={[
            { label: "all", value: "all" },
            { label: "one", value: "one" },
            { label: "two", value: "two" },
            { label: "three", value: "three" },
          ]}
        /> */}
      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by  amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
      <EmployeeSearch />
    </Operation>
  );
}

export default EmployeeTableOperation;
