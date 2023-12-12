export default function Icon(params) {
  const { icon, iconColor, percent } = params;

  return (
    <div>
      <img
        src={icon}
        className="p-4 rounded my-3"
        style={{ background: iconColor }}
      />
      <p className="text-sm font-bold">{percent}</p>
    </div>
  );
}
