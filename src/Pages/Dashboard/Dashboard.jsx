import IconBox from "../../Components/Icon Box/IconBox";
import ReportIconBox from "../../Components/Report Icon Box/ReportIconBox";
import SectionTitle from "../../Components/Section Title/SectionTitle";
import RevenueChart from "../../Components/Revenue Chart/RevenueChart";

export default function Dashboard() {
  return (
    <>
      <SectionTitle title="داشبورد" />
      <div className="grid grid-cols-1 xl:gap-3 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-3 gap-y-3">
        {/* Shop Summary Section */}
        <div className="bg-white flex flex-col gap-4 p-3 shadow rounded lg:col-span-2 xl:flex-row">
          <div className="w-full xl:max-w-[250px] bg-gray-200 h-[250px] flex items-center justify-center rounded">
            <img src="src/assets/logo.svg" />
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-4xl font-bold">فروشگاه در یک نگاه</h1>
            <p className="text-gray-700">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از{" "}
            </p>

            <h2 className="text-2xl font-bold">آمارهای فروشگاه</h2>
            <div className="lg:flex gap-2">
              <IconBox
                icon="src/assets/gem.svg"
                iconColor="#00BA9D"
                title="درآمد"
                number="15,412"
                percent="+45%"
                percentColor="#00BA9D"
              />
              <IconBox
                icon="src/assets/expense.svg"
                iconColor="#FF5470"
                title="هزینه‌ها"
                number="35,412"
                percent="-12%"
                percentColor="#FF5470"
              />
              <IconBox
                icon="src/assets/orders.svg"
                iconColor="#035ECF"
                title="سفارشات"
                number="380"
                percent="+24%"
                percentColor="#00BA9D"
              />
            </div>
          </div>
        </div>

        {/* Net Income Section */}
        <div className="balance-section hidden gap-3 items-center justify-center shadow border-2 border-slate-200 rounded xl:flex">
          <img src="src/assets/balance.webp" width="50%" />
          <div>
            <h2 className="text-2xl font-bold text-[#00193b]">475,380</h2>
            <p>درآمد خالص</p>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-white flex items-stretch rounded shadow p-3 col-span-2 lg:col-span-1 xl:col-span-2">
          <RevenueChart />
        </div>

        {/* Total Report */}
        <div className="bg-white shadow rounded p-3 flex flex-col gap-3 col-span-2 lg:col-span-1">
          <h1 className="text-4xl font-bold">آمارهای مهم</h1>
          <p className="text-sm text-gray-700">
            آمارهای یکسال گذشته مربوط به فروشگاه
          </p>

          <div className="flex flex-col gap-3">
            <ReportIconBox
              icon="src/assets/coin.webp"
              title="درآمد"
              number="176,000"
              percent="+45%"
              color="#00ba9d"
            />
            <ReportIconBox
              icon="src/assets/expense.webp"
              title="هزینه"
              number="310,000"
              percent="-12%"
              color="#ff5470"
            />
            <ReportIconBox
              icon="src/assets/profit.webp"
              title="سود"
              number="342,000"
              percent="+14.5%"
              color="#00ba9d"
            />

            <button className="bg-blue-500 text-white py-3 rounded-3xl hover:translate-y-[-5px] transition-all">
              مشاهده بیشتر
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
