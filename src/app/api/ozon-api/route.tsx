export async function GET() {
  const OZON_API_URL = process.env.OZON_API_URL;
  const OZON_API_KEY = process.env.OZON_API_KEY;
  const CUSTOMER_ID = process.env.CUSTOMER_ID;

  if (!OZON_API_KEY) {
    return new Response("API key is missing", { status: 400 });
  }

  const requestBody = {
    filter: {
      visibility: "ALL",
    },
    last_id: "",
    limit: 500,
  };

  try {
    if (!OZON_API_URL) {
      return new Response("API URL is missing", { status: 400 });
    }

    const response = await fetch(OZON_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": OZON_API_KEY,
        ...(CUSTOMER_ID && { "Client-Id": CUSTOMER_ID }),
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      return new Response("Failed to fetch data", { status: response.status });
    }

    const data = await response.json();

    const mappedData = data.result.map((item: { sku: number; primary_image: string; offer_id: string }) => ({
      id: item.sku,
      primary_image: item.primary_image,
      offer_id: item.offer_id,
    }));

    return new Response(JSON.stringify(mappedData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response("Internal Server Error", { status: 500 });
  }
}
