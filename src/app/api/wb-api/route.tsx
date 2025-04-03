export async function GET() {
  const WB_API_URL = process.env.WB_API_URL;
  const WB_API_KEY = process.env.WB_API_KEY;
  // const CUSTOMER_ID = process.env.CUSTOMER_ID;

  if (!WB_API_KEY) {
    return new Response("API key is missing", { status: 400 });
  }

  const requestBody = {
    settings: {
      cursor: {
        limit: 100,
      },
      filter: {
        withPhoto: -1,
      },
    },
  };

  try {
    if (!WB_API_URL) {
      return new Response("API URL is missing", { status: 400 });
    }

    const response = await fetch(WB_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: WB_API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      return new Response("Failed to fetch data", { status: response.status });
    }

    const data = await response.json();

    const mappedData = data.cards.map((item: { nmID: number; vendorCode: string }) => ({
      wbid: item.nmID,
      vendorCode: item.vendorCode,
    }));

    return new Response(JSON.stringify(mappedData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response("Internal Server Error", { status: 500 });
  }
}
