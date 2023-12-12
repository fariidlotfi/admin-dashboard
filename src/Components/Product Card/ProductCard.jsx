import { Link } from "react-router-dom";

export default function ProductCard(params) {
  const { img, name, count, sell, regPrice, salePrice } = params;

  return (
    <div className="flex flex-col gap-2 bg-white shadow hover:shadow-xl rounded p-3 transition-all">
      <img className="border" src={img} alt={name} width="100%" height="100%" />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-[#00BA9D] font-bold ">تعداد: {count}</p>
      <p className="text-[#3498db] font-bold">فروش: {sell}</p>
      <p className="text-gray-600">قیمت اصلی: {regPrice}</p>
      <p className="text-gray-600">قیمت ویژه: {salePrice}</p>

      <div className="flex gap-2">
        <Link
          to="edit"
          className="border border-sky-500 text-center rounded-3xl w-full py-2 px-4 text-sky-500 hover:text-white hover:bg-sky-500 transition-all"
        >
          ویرایش
        </Link>
        <button className="border border-red-500 rounded-3xl w-full py-2 px-4 text-red-500 hover:text-white hover:bg-red-500 transition-all">
          حذف
        </button>
      </div>
    </div>
  );
}
