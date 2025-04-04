type WBCursor = { updatedAt?: string; nmID?: number };
type WBProduct = { wbid: number; vendorCode: string };

export async function fetchWBData(cursor?: WBCursor): Promise<{ products: WBProduct[]; cursor: WBCursor | null }> {
  try {
    const url = cursor ? `/api/wb-api?updatedAt=${cursor.updatedAt}&nmID=${cursor.nmID}` : "/api/wb-api";

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data: { products: WBProduct[]; cursor: WBCursor | null } = await response.json();
    return data;
  } catch (error) {
    console.error("Error WB:", error);
    return { products: [], cursor: null };
  }
}
