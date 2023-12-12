import SectionTitle from "../../Components/Section Title/SectionTitle";
import InfoBox from "../../Components/Info Box/InfoBox";
import StarsBar from "../../Components/Stars Bar/StarsBar";
import DataGridShow from "../../Components/Data Grid/DataGridShow";
import { reviews, reviewHeader } from "../../Data/Reviews";

export default function Reviews() {
  return (
    <>
      <SectionTitle title="نقد و بررسی محصولات" />
      <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-3 lg:grid-cols-4 xl:grid-cols-6">
        <InfoBox
          icon="src/assets/star.svg"
          iconColor="violet"
          number="4,5"
          title="میانگین امتیازات"
        />
        <InfoBox
          icon="src/assets/people.svg"
          iconColor="#00BA9D"
          number="17,640"
          title="تعداد مشتریان"
        />
        <InfoBox
          icon="src/assets/person-plus.svg"
          iconColor="#035ECF"
          number="25٪"
          title="مشتریان جدید"
        />
        <InfoBox
          icon="src/assets/person-gear.svg"
          iconColor="#FF5470"
          number="75٪"
          title="مشتریان عادی"
        />

        <div className=" bg-white flex flex-col md:col-span-2 lg:col-span-4 xl:col-span-2 gap-1 p-3 justify-center items-stretch shadow hover:shadow-md">
          <StarsBar count="5" percent="39" />
          <StarsBar count="4" percent="58" />
          <StarsBar count="3" percent="26" />
          <StarsBar count="2" percent="17" />
          <StarsBar count="1" percent="5" />
        </div>
      </div>

      <div className="bg-white p-3 shadow hover:shadow-md transition-all rounded mt-3">
        <DataGridShow headers={reviewHeader} data={reviews} />
      </div>
    </>
  );
}
