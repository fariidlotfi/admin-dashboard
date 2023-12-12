export default function InfoBox(params) {
  const { icon, iconColor, number, title } = params;

  return (
    <div className="bg-white p-5 rounded shadow hover:shadow-md transition-all flex flex-col gap-2 items-start justify-center">
      <img
        src={icon}
        style={{ background: iconColor }}
        className="p-3 rounded-sm"
      />
      <h2 className="text-2xl font-bold">{number}</h2>
      <p className="font-bold text-sm">{title}</p>
    </div>
  );
}
