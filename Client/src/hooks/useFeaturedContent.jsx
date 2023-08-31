import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useFeaturedContent = (type="all") => {
  const { data, error, isLoading } = useSWR("/content/featured/"+type, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useFeaturedContent;