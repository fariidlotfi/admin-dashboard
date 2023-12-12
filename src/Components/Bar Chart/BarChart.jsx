import { BarChart } from "@mui/x-charts/BarChart";
import { usersCity } from "../../Data/User's Geo";

export default function BarChartShow() {
  return (
    <BarChart
      dataset={usersCity}
      yAxis={[{ scaleType: "band", dataKey: "city" }]}
      series={[{ dataKey: "value", label: "تعداد مشتریان" }]}
      layout="horizontal"
    />
  );
}
