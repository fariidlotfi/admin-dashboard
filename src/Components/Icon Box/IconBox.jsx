export default function IconBox(params) {
  const { icon, iconColor, title, number, percent, percentColor } = params;

  return (
    <div className="flex bg-white px-3 py-2 gap-3 rounded">
      <div className="w-[50px]">
        <img
          className="p-2 rounded"
          src={icon}
          style={{ background: iconColor }}
          width="50px"
        />
      </div>

      <div className="flex flex-col gap-1 px-3 py-2">
        <h2 className="text-2xl text-[#00193b] font-bold">{number}</h2>
        <div className="flex gap-3 items-center">
          <p className="text-sm">{title}</p>
          <p className="text-base" style={{ color: percentColor }}>
            {percent}
          </p>
        </div>
      </div>
    </div>
  );
}
