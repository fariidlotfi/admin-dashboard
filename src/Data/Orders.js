const orders = [
  {
    id: 51514,
    product: "test",
    payment: 129,
    orderStatus: "تکمیل شده",
  },
  {
    id: 5124,
    product: "test 1",
    payment: 187,
    orderStatus: "تایید شده",
  },
  {
    id: 6487,
    product: "test 3",
    payment: 172,
    orderStatus: "لغو شده",
  },
];

const orderHeader = [
  { field: "id", headerName: "شماره سفارش", width: 150 },
  { field: "product", headerName: "محصول", width: 80 },
  { field: "payment", headerName: "مبلغ", width: 150 },
  { field: "orderStatus", headerName: "وضعیت", sortable: false },
];

export { orders, orderHeader };
