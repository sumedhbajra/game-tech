import AdminHeader from "../ui/AdminHeader";
import EmployeeTableOperation from "../features/Employee/EmployeeTableOperation";
import EmployeeTable from "../features/Employee/EmployeeTable";

function Employee() {
  return (
    <div>
      <AdminHeader title="Your Employees" link="View user logged in" />
      <EmployeeTableOperation />
      <EmployeeTable />
    </div>
  );
}

export default Employee;
