import { NavLink } from "react-router-dom";

function AdminHeader({
  title = "{provide title}",
  link = "{provide link}",
  path = "*",
}) {
  return (
    <div className="flex justify-between items-center">
      <span>
        <h1 className="text-[20px] font-bold text-[var(--color-brand-800)]">
          {title}
        </h1>
      </span>
      <span>
        <NavLink
          to={path}
          className="underline text-[15px] text-[var(--color-brand-800)]"
        >
          {link}
        </NavLink>
      </span>
    </div>
  );
}

export default AdminHeader;
