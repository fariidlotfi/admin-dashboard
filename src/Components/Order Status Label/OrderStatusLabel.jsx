export default function OrderStatusLabel(params) {
  const { status } = params;

  switch (status) {
    case "completed":
      return (
        <button className="px-3 py-2 bg-[#035ECF] text-white">تکمیل شده</button>
      );
    case "confirmed":
      return (
        <button className="px-3 py-2 bg-[#12B499] text-white">تایید شده</button>
      );
    case "cancelled":
      return (
        <button className="px-3 py-2 bg-[#FF5470] text-white">لغو شده</button>
      );
    case "refunded":
      return (
        <button className="px-3 py-2 bg-[#515C6B] text-white">مسترد شده</button>
      );
  }
}
