import { DataGrid } from "@mui/x-data-grid";

export default function DataTable(params) {
  const { headers, data } = params;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        localeText={{}}
        rows={data}
        columns={headers}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
