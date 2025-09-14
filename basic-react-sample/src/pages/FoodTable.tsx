import CustomTable, { Column } from "../components/CustomTable";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

type RowType = typeof rows[number];

const columns: Column<RowType>[] = [
  { field: "name", headerName: "Dessert (100g serving)", isHeader: true },
  { field: "calories", headerName: "Calories", align: "right" },
  { field: "fat", headerName: "Fat (g)", align: "right" },
  { field: "carbs", headerName: "Carbs (g)", align: "right" },
  { field: "protein", headerName: "Protein (g)", align: "right" },
];

export default function FoodTable() {
  return <CustomTable rows={rows} columns={columns} />;
}