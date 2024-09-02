import { useParams, useSearchParams } from "react-router-dom";

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  // console.log("above");

  return <div>This is dashboard</div>;
}

export default Dashboard;
