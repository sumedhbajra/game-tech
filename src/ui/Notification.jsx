import { CgBell } from "react-icons/cg";
import { useState } from "react";

function Notification() {
  // State to simulate notification presence
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <div className="relative bg-[--color-grey-100] p-2 rounded-md text-center hover:bg-gray-200 transition-colors duration-300">
      <CgBell
        className="text-gray-400 hover:text-gray-800 transition-colors duration-300"
        size={25}
      />
      {hasNotification && (
        <span className="absolute top-2 right-2 h-3 w-3 bg-red-500 rounded-full"></span>
      )}
    </div>
  );
}

export default Notification;
