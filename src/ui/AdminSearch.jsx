import { BiSearchAlt } from "react-icons/bi";

function AdminSearch() {
  return (
    <div className="flex w-[40rem] items-center gap-2 p-2 rounded-md">
      <span className="text-gray-500">
        <BiSearchAlt size={30} />
      </span>
      <input
        placeholder="Search..."
        className="text-[20px] flex-1 p-2 border-none focus:outline-none"
      />
    </div>
  );
}

export default AdminSearch;
