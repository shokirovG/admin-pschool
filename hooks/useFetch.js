const useFetch = () => {
  const request = async (
    url,
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" }
  ) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/${url}`, {
      method,
      body,
      headers,
    });
    if (res.ok) {
      const data = res.json();
      return data;
    }
  };
  return { request };
};

export default useFetch;
