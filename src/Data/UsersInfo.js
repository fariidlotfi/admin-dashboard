const usersInfo = [
  { id: 1, lastName: "فرید", firstName: "لطفی", age: 30, username: "farid" },
  { id: 2, lastName: "محسن", firstName: "فلاحی", age: 28, username: "mohsen" },
  { id: 3, lastName: "امیر", firstName: "لطفی", age: 35, username: "amir" },
  {
    id: 4,
    lastName: "فرشید",
    firstName: "خسروی",
    age: 31,
    username: "farshid",
  },
  { id: 5, lastName: "کارو", firstName: "اشعری", age: 32, username: "karo" },
];

const userInfoColumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "نام", width: 150 },
  { field: "lastName", headerName: "نام خانوادگی", width: 150 },
  { field: "age", headerName: "سن", width: 200 },
  {
    field: "username",
    headerName: "نام کاربری",
  },
];

export { usersInfo, userInfoColumn };
