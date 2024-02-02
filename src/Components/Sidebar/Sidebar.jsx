import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const liStyles =
    "flex items-center gap-3 hover:bg-sky-300 transition-all hover: cursor-pointer p-2 hover:text-white rounded";

  return (
    <div className="w-full flex flex-col  gap-9 bg-white">
      <div className="flex flex-col items-center gap-3">
        <img src="assets/avatar.webp" width="100px" height="100px" />
        <p>خوش آمدید</p>
      </div>
      <ul className="flex flex-col gap-2">
        <NavLink to="/">
          <li className={liStyles}>
            <img src="assets/SideBar/dashboard.svg" />
            داشبورد
          </li>
        </NavLink>
        <NavLink to="users">
          <li className={liStyles}>
            <img src="assets/SideBar/users.svg" />
            کاربران
          </li>
        </NavLink>

        <NavLink to="products">
          <li className={liStyles}>
            <img src="assets/SideBar/boxes.svg" />
            محصولات
          </li>
        </NavLink>
        <NavLink to="orders">
          <li className={liStyles}>
            <img src="assets/SideBar/orders.svg" />
            سفارشات
          </li>
        </NavLink>
        <NavLink to="reviews">
          <li className={liStyles}>
            <img src="assets/SideBar/comment.svg" />
            نظرات{" "}
          </li>
        </NavLink>
        <hr />
        <NavLink to="settings">
          {" "}
          <li className={liStyles}>
            <img src="assets/SideBar/settings.svg" />
            تنظیمات
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
