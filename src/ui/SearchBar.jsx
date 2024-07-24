import { BiSearch } from "react-icons/bi";
function SearchBar({ placeHolder }) {
  return (
    <div className="bg-white bg-opacity-20 rounded-3xl transition-transform transform hover:scale-105 ">
      <div className="flex items-center p-2 px-[20px]">
        <BiSearch size={20} className="text-white" />
        <input
          className="bg-transparent text-white ml-2 focus:outline-none"
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
}

export default SearchBar;
