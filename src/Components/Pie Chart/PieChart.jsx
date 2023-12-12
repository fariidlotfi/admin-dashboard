import { PieChart } from "@mui/x-charts/PieChart";
import { data } from "../../Data/Users";

export default function PieChartShow() {
  return (
    <PieChart
      series={[
        {
          data: [...data.map((i) => i)],
        },
      ]}
    />
  );
}
