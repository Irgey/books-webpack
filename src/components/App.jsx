import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto';
import { Router } from './Router/Router';
import { BooksProvider } from './BooksProvider/BooksProvider';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000, // due to Google Books API query limitations (1000 per day) we need to reduce count of requests and take data from cache
      refetchOnWindowFocus: false,
    },
  },
});
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="books-webpack">
        <BooksProvider>
          <Router />
        </BooksProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
