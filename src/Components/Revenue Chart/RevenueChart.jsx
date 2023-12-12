import { data } from "../../Data/Income";
import { BarChart } from "@mui/x-charts/BarChart";

export default function RevenueChart() {
  return (
    <BarChart
      xAxis={[
        {
          id: "month",
          data: [...data.map((i) => i.month.toString())],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [...data.map((i) => i.income)],
        },
      ]}
      width={800}
      height={300}
    />
  );
}
