export async function GET(req: Request) {
  const WB_API_URL = process.env.WB_API_URL;
  const WB_API_KEY = process.env.WB_API_KEY;

  if (!WB_API_URL || !WB_API_KEY) {
    return new Response("API URL or API key is missing", { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const updatedAt = searchParams.get("updatedAt");
  const nmID = searchParams.get("nmID");

  interface RequestBody {
    settings: {
      cursor: {
        limit: number;
        updatedAt?: string;
        nmID?: number;
      };
      filter: {
        withPhoto: number;
      };
    };
  }

  const requestBody: RequestBody = {
    settings: {
      cursor: {
        limit: 32,
      },
      filter: {
        withPhoto: -1,
      },
    },
  };

  if (updatedAt && nmID) {
    requestBody.settings.cursor.updatedAt = updatedAt;
    requestBody.settings.cursor.nmID = Number(nmID);
  }

  try {
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

    const newCursor = {
      updatedAt: data.cursor?.updatedAt || null,
      nmID: data.cursor?.nmID || null,
    };

    return new Response(JSON.stringify({ products: mappedData, cursor: newCursor }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response("Internal Server Error", { status: 500 });
  }
}
