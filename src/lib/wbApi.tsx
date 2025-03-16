const WB_API_URL = "https://api.wb.ru/example-endpoint";
const WB_API_KEY = process.env.WB_API_KEY;

interface Params {
  [key: string]: string;
}

export async function fetchWBData(params: Params = {}) {
  try {
    const url = new URL(WB_API_URL);
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.WB_CLIENT_ID && { "Client-Id": process.env.WB_CLIENT_ID }),
        ...(WB_API_KEY && { "Api-Key": WB_API_KEY }),
      },
    });

    if (!response.ok) throw new Error(`Errors ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error WB:", error);
    return null;
  }
}
