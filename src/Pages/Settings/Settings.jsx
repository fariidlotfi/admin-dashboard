import SectionTitle from "../../Components/Section Title/SectionTitle";
import UserRoleBadge from "../../Components/User Role Badge/UserRoleBadge";

export default function Settings() {
  const formLabelStyle = "flex flex-col gap-1 text-gray-600";
  const formInputStyle = "border border-gray-200 p-2 rounded";

  return (
    <>
      <SectionTitle title="تنظیمات سایت" />

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-y-3 xl:grid-cols-12 xl:gap-3">
        {/* Account Info Grid */}
        <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:grid-rows-3 md:gap-3 xl:grid-cols-1 xl:col-span-4">
          <div className="bg-white rounded shadow flex flex-col gap-3 p-3 items-center justify-center md:row-span-3">
            <img src="assets/avatar.webp" width="100px" height="100px" />
            <h2 className="text-3xl font-bold">فرید لطفی</h2>
            <UserRoleBadge userRole="admin" />

            <p className="text-sky-600">آخرین بازدید : یک روز پیش</p>

            <button className="px-4 py-2 bg-sky-700 text-white font-bold w-full rounded-3xl">
              خروج از حساب کاربری
            </button>
          </div>

          {/* Notification & Messages Section */}
          <div className="bg-white flex flex-col gap-3 p-3 rounded shadow hover:shadow-md">
            <span className="flex gap-2 items-center">
              <img
                src="assets/notification.svg"
                width="20px"
                height="20px"
              />
              اعلانات سایت
            </span>
            <span className="flex gap-2 items-center">
              <img
                src="assets/messageIcon.svg"
                width="20px"
                height="20px"
              />
              پیام‌های ارسال شده
            </span>
          </div>

          {/* Account Details Text */}
          <div className="bg-white flex flex-col gap-3 p-3 rounded shadow hover:shadow-md md:row-span-2">
            <span className="flex gap-2 items-center">
              <img
                src="assets/messageIcon.svg"
                width="20px"
                height="20px"
              />
              soafery@gmail.com
            </span>

            <span className="flex gap-2 items-center">
              <img src="assets/geo-alt.svg" width="20px" height="20px" />
              کردستان، مریوان، بلوار عبادت، مجتمع یونس کردستانی، طبقه ۲، پلاک ۱۹
            </span>
            <span className="flex gap-2 items-center">
              <img src="assets/phone.svg" width="20px" height="20px" />
              09195399423
            </span>
            <span className="flex gap-2 items-center">
              <img src="assets/whatsapp.svg" width="20px" height="20px" />
              09195399423
            </span>
          </div>
        </div>

        {/* Profile Detail Edit Form */}
        <div className="bg-white rounded shadow hover:shadow-md p-3 xl:col-span-8">
          <h2 className="text-3xl font-bold mb-3">اطلاعات حساب کاربری</h2>

          <form className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-3">
            <label className={formLabelStyle}>
              نام
              <input className={formInputStyle} type="text" width="100%" />
            </label>
            <label className={formLabelStyle}>
              نام خانوادگی
              <input className={formInputStyle} type="text" />
            </label>
            <label className={formLabelStyle}>
              ایمیل
              <input className={formInputStyle} type="email" />
            </label>
            <label className={formLabelStyle}>
              شماره تماس
              <input className={formInputStyle} type="tel" />
            </label>
            <label className={formLabelStyle}>
              رمز عبور
              <input className={formInputStyle} type="password" />
            </label>
            <label className={formLabelStyle}>
              استان
              <input className={formInputStyle} type="text" />
            </label>
            <label className={formLabelStyle}>
              شهرستان
              <input className={formInputStyle} type="text" />
            </label>
            <label className={formLabelStyle}>
              آدرس کامل
              <input className={formInputStyle} type="text" />
            </label>

            <button className="p-2 bg-sky-600 text-white rounded-3xl md:col-span-2">
              ثبت تغییرات
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
