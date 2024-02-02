export default function NavBar() {
  return (
    <header className="flex gap-3 justify-between w-full">
      <div className="w-[50%]">
        <input
          type="text"
          placeholder="جستجو..."
          className="hidden lg:block navbar-search-input rounded shadow shadow-slate-400 outline-none px-3 py-2 w-full"
        />
      </div>

      <div className="flex flex-row gap-3">
        <img src="assets/darkMode.svg" width="25px" height="25px" />
        <div className="relative flex items-center">
          <img src="assets/notification.svg" width="25px" height="25px" />
          <p className="absolute top-[-5px] right-[-5px] text-white bg-red-500 rounded-full px-1 text-sm">
            5
          </p>
        </div>
        <div className="relative flex items-center">
          <img src="assets/messageIcon.svg" width="25px" height="25px" />
          <p className="absolute top-[-5px] right-[-5px] text-white bg-sky-500 rounded-full px-1 text-sm">
            5
          </p>
        </div>
        <img src="assets/userAvatar.svg" width="25px" height="25px" />
      </div>
    </header>
  );
}
