'use client'
import React from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox,
  Paper,
} from "@mui/material";
import { format } from "date-fns";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilized = array.map((el, index) => [el, index]);
  stabilized.sort((a, b) => {
    const cmp = comparator(a[0], b[0]);
    if (cmp !== 0) return cmp;
    return a[1] - b[1];
  });
  return stabilized.map((el) => el[0]);
}

const headCells = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "phoneNumber", label: "Phone Number" },
  { id: "registration", label: "Registration" },
  { id: "createdAt", label: "Created At" },
];

export default function AdminTable({ users }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [selected, setSelected] = useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = users.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const numSelected = selected.length;
  const rowCount = users.length;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
        <TableHead
          sx={{
            backgroundColor: "#4d0013",
            "& .MuiTableCell-root": { color: "white", borderBottom: "none" },
          }}
        >
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                sx={{
                  color: "white",
                  "&.Mui-checked": { color: "white" },
                }}
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={handleSelectAllClick}
                inputProps={{ "aria-label": "select all users" }}
              />
            </TableCell>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sortDirection={orderBy === headCell.id ? order : false}
                sx={{ color: "white" }}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={(event) => handleRequestSort(event, headCell.id)}
                  sx={{
                    color: "white",
                    "&.MuiTableSortLabel-root": {
                      color: "white",
                    },
                    "&.Mui-active": {
                      color: "white !important",
                    },
                    "& .MuiTableSortLabel-icon": {
                      color: "white !important",
                    },
                  }}
                >
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(users, getComparator(order, orderBy)).map((user, index) => {
            const isItemSelected = isSelected(user.id);
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableRow
                hover
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={user.id}
                selected={isItemSelected}
                sx={{
                  backgroundColor:
                    user.registration === "pending" ? "#fff9e6" : "inherit",
                  "&:hover": {
                    backgroundColor:
                      user.registration === "pending" ? "#fff2cc" : "#f5f5f5",
                  },
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    onChange={(event) => handleClick(event, user.id)}
                    inputProps={{ "aria-labelledby": labelId }}
                    sx={{
                      color: "#003a4d",
                      "&.Mui-checked": { color: "#003a4d" },
                    }}
                  />
                </TableCell>
                <TableCell component="th" id={labelId} scope="row" padding="none">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.registration}</TableCell>
                <TableCell>{format(new Date(user.createdAt), "PP")}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
