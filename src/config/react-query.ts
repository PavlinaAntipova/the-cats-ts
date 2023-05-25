import { QueryClient } from 'react-query';

const customQueryClient = 
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

export default customQueryClient;