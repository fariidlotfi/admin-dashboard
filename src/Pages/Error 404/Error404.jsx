import { Link, useNavigate } from "react-router-dom";

export default function Error404() {
  const buttonStyle = "px-5 py-3 text-white rounded-2xl";
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <img src="/src/assets/404.svg" className="w-1/3" />
      <h1 className="text-3xl font-bold">خطای 404 - صفحه وجود ندارد</h1>
      <p className="text-sm">
        با عرض پوزش، صفحه درخواستی حذف شده یا وجود ندارد. از طریق دکمه‌های زیر
        می‌توانید مسیر خود را مشخص نمایید.
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className={`${buttonStyle} bg-red-500`}
        >
          بازگشت به صفحه قبلی
        </button>
        <Link to="/" className={`${buttonStyle} bg-sky-500`}>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
