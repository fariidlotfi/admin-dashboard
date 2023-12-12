export default function HBarChart(params) {
  const { title, percent, color } = params;
  return (
    <div>
      <div className="relative bg-gray-200 h-5 rounded-xl">
        <div
          className="absolute top-0 right-0 h-5 rounded-xl"
          style={{ width: percent, background: color }}
        ></div>
        <span className="absolute top-[-20px] left-3 text-sm">{percent}</span>
      </div>

      <p className="text-sm mt-1">{title}</p>
    </div>
  );
}
