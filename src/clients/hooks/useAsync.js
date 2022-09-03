import { useState, useEffect } from "react";
export const useAsync = (fn) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (loading) {
      fn()
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [fn, loading]);

  return {
    data,
    loading,
    error,
  };
};
