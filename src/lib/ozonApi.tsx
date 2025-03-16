const OZON_API_URL = "https://api.ozon.ru/example-endpoint";
const OZON_API_KEY = process.env.OZON_API_KEY;

interface Params {
  [key: string]: string;
}

export async function fetchOzonData(params: Params = {}) {
  try {
    const url = new URL(OZON_API_URL);
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.OZON_CLIENT_ID && { "Client-Id": process.env.OZON_CLIENT_ID }),
        ...(OZON_API_KEY && { "Api-Key": OZON_API_KEY }),
      },
    });

    if (!response.ok) throw new Error(`Errors ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error Ozon:", error);
    return null;
  }
}
