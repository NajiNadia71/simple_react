import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export interface Column<T> {
  field: keyof T;
  headerName: string;
  align?: "right" | "left" | "center" | "inherit" | "justify";
  isHeader?: boolean; // optional flag if you want special header styles
}

interface CustomTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  minWidth?: number;
}

export default function CustomTable<T extends { [key: string]: any }>({
  columns,
  rows,
  minWidth = 650,
}: CustomTableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth }} aria-label="custom table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={String(col.field)} align={col.align || "left"}>
                {col.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((col) => (
                <TableCell
                  key={String(col.field)}
                  align={col.align || "left"}
                  component={col.isHeader ? "th" : "td"}
                  scope={col.isHeader ? "row" : undefined}
                >
                  {row[col.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
