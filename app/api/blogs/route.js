export async function GET(request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    statusText: "OK",
  });
}
