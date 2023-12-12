import SectionTitle from "../../Components/Section Title/SectionTitle";
import InfoBox from "../../Components/Info Box/InfoBox";
import PieChartShow from "../../Components/Pie Chart/PieChart";
import BarChartShow from "../../Components/Bar Chart/BarChart";
import Icon from "../../Components/Icon/Icon";
import DataGridShow from "../../Components/Data Grid/DataGridShow";
import { usersInfo, userInfoColumn } from "../../Data/UsersInfo";

export default function Users() {
  return (
    <>
      <SectionTitle title="مشتریان" />

      <div className="grid grid-cols-1 grid-rows-4 gap-y-3 md:grid-cols-2 md:gap-3 md:grid-rows-2 xl:grid-rows-1 xl:grid-cols-4">
        <InfoBox
          icon="src/assets/people.svg"
          iconColor="green"
          number="32,754"
          title="همه مشتریان"
        />
        <InfoBox
          icon="src/assets/person-plus.svg"
          iconColor="red"
          number="12,418"
          title="مشتریان جدید"
        />
        <InfoBox
          icon="src/assets/person-gear.svg"
          iconColor="blue"
          number="18,594"
          title="مشتریان ویژه"
        />
        <InfoBox
          icon="src/assets/people.svg"
          iconColor="violet"
          number="17,640"
          title="مشتریان عادی"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
        <div className="grid bg-white p-3 rounded my-3 shadow gap-3">
          <h2 className="my-3 text-4xl font-bold mb-4">آمار کاربران سایت</h2>
          <div className="h-[200px] flex items-center justify-center">
            <PieChartShow />
          </div>

          <h3 className="text-2xl font-bold ">همه مشتریان در یک سال اخیر</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده.
          </p>

          <ul className="list-disc mr-5">
            <li>همه مشتریان - 32,754</li>
            <li>مشتریان جدید - 12,418</li>
            <li>مشتریان ویژه - 18,594</li>
            <li>مشتریان عادی - 17,640</li>
          </ul>
        </div>

        <div className="grid bg-white p-3 rounded my-3 shadow gap-3">
          <h2 className="my-3 text-4xl font-bold mb-4">مشتریان براساس شهر</h2>
          <BarChartShow />

          <h3 className="text-2xl font-bold">مشتریان براساس جنسیت</h3>
          <div className="flex gap-12 items-center ">
            <Icon
              icon="src/assets/gender-male.svg"
              iconColor="blue"
              percent="65%"
            />
            <Icon
              icon="src/assets/gender-female.svg"
              iconColor="blue"
              percent="32%"
            />
            <Icon icon="src/assets/gem.svg" iconColor="blue" percent="3%" />
          </div>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و </p>
        </div>
      </div>
      {/* All Users in Data Grid */}
      <div className="bg-white p-3 rounded shadow">
        <h2 className="text-4xl font-bold mb-8">لیست کاربران سایت</h2>
        <DataGridShow headers={userInfoColumn} data={usersInfo} />
      </div>
    </>
  );
}
