import { GiConsoleController } from "react-icons/gi";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <span>
        <GiConsoleController size={35} color="var(--color-brand-800)" />
      </span>
      <span className="uppercase font-bold text-[20px]">
        Gaming <br /> Galaxy
      </span>
    </div>
  );
}

export default Logo;
