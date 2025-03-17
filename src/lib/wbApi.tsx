const WB_API_URL = "https://content-api.wildberries.ru/content/v2/object/all";
const WB_API_KEY = process.env.NEXT_PUBLIC_WB_API_KEY;

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
    console.log("responseeeeeeee", response);

    if (!response.ok) throw new Error(`Errors ${response.status}`);
    console.log("errrrrrror", response);

    return await response.json();
  } catch (error) {
    console.error("Error WB:", error);
    return null;
  }
}
