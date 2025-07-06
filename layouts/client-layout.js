'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LayoutProvider } from '@/contexts/layout-context';
import { Providers } from '@/app/providers';
import theme from '@/providers/theme-provider';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutProvider>
        <Providers>{children}</Providers>
      </LayoutProvider>
    </ThemeProvider>
  );
}
