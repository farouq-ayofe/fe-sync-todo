import { QueryClient, keepPreviousData, type QueryClientConfig } from "@tanstack/react-query";

const STALE_TIME = 1000 * 60 * 60 * 1; // 1 hour;

export const QUERY_CLIENT_OPTIONS: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      gcTime: STALE_TIME,

      placeholderData: keepPreviousData,
                    //   refetchOnWindowFocus: true,
                    //   refetchOnMount: true,
      retry: 3, // retry 3 times
    },
  },
};

 

export const QUERY_CLIENT = new QueryClient(QUERY_CLIENT_OPTIONS);

/// Open up the dev tool
/// Request function