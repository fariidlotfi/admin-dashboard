export default function UserRoleBadge(params) {
  const { userRole } = params;
  const badgeStyle = "text-white p-1 w-[80px] text-center rounded-lg text-sm";

  switch (userRole) {
    case "admin":
      return <span className={`bg-red-500 ${badgeStyle}`}>مدیر</span>;
    case "customer":
      return <span className={`bg-sky-500 ${badgeStyle}`}>مشتری</span>;
    case "seller":
      return <span className={`bg-orange-500 ${badgeStyle}`}>فروشنده</span>;

    default:
      return <span className={`bg-gray-500 ${badgeStyle}`}>نامشخص</span>;
  }
}
