import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto';
import { Router } from './Router/Router';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="books-webpack">
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
