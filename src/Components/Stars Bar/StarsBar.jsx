export default function StarsBar(params) {
  const { count, percent } = params;

  return (
    <div className="flex gap-2 items-center">
      <div className="flex gap-1 items-center">
        <p>{count}</p>
        <img src="src/assets/star.svg" />
      </div>

      <div className="w-[90%] bg-gray-200 h-[12px] rounded-lg relative">
        <div
          className="h-[10px] rounded-lg bg-[#F8D518] absolute top-0 right-0 shadow "
          style={{ width: percent + "%" }}
        ></div>
      </div>

      <p>{percent + "%"}</p>
    </div>
  );
}
