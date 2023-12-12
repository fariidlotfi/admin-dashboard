import SectionTitle from "../../Components/Section Title/SectionTitle";
import InfoBox from "../../Components/Info Box/InfoBox";
import HBarChart from "../../Components/Horizontal Bar Chart/HBarChart";
import DataGridShow from "../../Components/Data Grid/DataGridShow";
import { orders, orderHeader } from "../../Data/Orders";

export default function Orders() {
  return (
    <>
      <SectionTitle title="سفارشات" />

      <h2 className="text-3xl font-bold">فیلترهای فعال</h2>

      <div className="grid grid-cols-1 mt-5 gap-y-3 md:grid-cols-2">
        <div className="flex gap-3 flex-col justify-end1 md:flex-row">
          <select className="py-2 px-3 bg-white rounded border border-gray-900">
            <option>همه محصولات</option>
            <option>دسته‌بندی 1</option>
            <option>دسته‌بندی 2</option>
            <option>دسته‌بندی 3</option>
          </select>
          <select className="py-2 px-3 bg-white rounded border border-gray-900">
            <option>مرتب‌سازی براساس</option>
            <option>اسم محصولات</option>
            <option>قیمت کم به زیاد</option>
            <option>قیمت زیاد به کم</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-3 mt-3 md:grid-cols-2 md:gap-3 xl:grid-cols-6">
        <div className="flex flex-col gap-5 bg-white rounded shadow hover:shadow-md p-3 md:col-span-2">
          <h2 className="text-3xl font-bold">آمار نرخ‌ها</h2>
          <HBarChart title="نمایش محصولات" percent="87%" color="#00193B" />
          <HBarChart title="سبدهای خرید رهاشده" percent="23%" color="#00193B" />
        </div>

        <InfoBox
          icon="src/assets/bag-check.svg"
          iconColor="#035ECF"
          number="2,754"
          title="تکمیل‌شده‌ها"
        />
        <InfoBox
          icon="src/assets/bag-plus.svg"
          iconColor="#00BA9D"
          number="1,980"
          title="تایید شده‌ها"
        />
        <InfoBox
          icon="src/assets/bag-dash.svg"
          iconColor="#FF5470"
          number="810"
          title="لغو شده‌ها"
        />
        <InfoBox
          icon="src/assets/bag.svg"
          iconColor="#515C6B"
          number="541"
          title="مسترد شده‌ها"
        />
      </div>

      {/* Orders List*/}
      <div className="bg-white p-3 rounded shadow hover:shadow-md mt-4 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">لیست سفارشات سایت</h2>

        <DataGridShow headers={orderHeader} data={orders} />
      </div>
    </>
  );
}
