export default function ReportIconBox(params) {
  const { icon, title, number, percent, color } = params;

  return (
    <div
      className="grid grid-cols-5 items-center gap-2 bg-[#f9f9f9] border-2 border-slate-200 rounded p-3

    "
    >
      <img src={icon} className="md:max-xl:hidden w-[50px]" />
      <p className="text-sm">{title}</p>
      <p className="col-span-2">{number}</p>
      <p className="text-sm" style={{ color: color }}>
        {percent}
      </p>
    </div>
  );
}
