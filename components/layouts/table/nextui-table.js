'use client';

import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';


const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        columnHeaders: {
          backgroundColor: '#1976d2',
        },
        columnHeaderTitleContainerContent: {
        //   color: '#ffffff',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default function AdminTable({ users }) {
  const [selectionModel, setSelectionModel] = useState([]);

  const router = useRouter();

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1.5 },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1.2 },
    { field: 'registration', headerName: 'Registration', flex: 1 },
    {
      field: 'createdAt',
      headerName: 'Registration Date',
      flex: 1.2,
      valueFormatter: (params) => {
        const value = params;
        const date = value instanceof Date ? value : new Date(value);
        return isNaN(date.getTime()) ? '' : format(date, 'PPP');
      }, 
    },
  ];

  const rows = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    registration: user.registration,
    createdAt: user.createdAt,
  }));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(newSelection) =>
            setSelectionModel(newSelection)
          }
          onRowClick={(params) => {
            const val = params.row.id
            router.push(`/admin/user/${val}`);
          }}
          getRowClassName={(params) =>
            params.row.registration === 'pending' ? 'pending-row' : ''
          }
          sx={{
            '& .MuiDataGrid-row:hover': {
              cursor: 'pointer',
            },
            '& .pending-row': {
              backgroundColor: '#fff3cd',
              '&:hover': {
                backgroundColor: '#ffe8a1',
              },
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}
