// import { QueryClient } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      staleTime: 5,
      keepPreviousData: true,
      retry: 0,
    },
  },
});

export default queryClientInstance;
