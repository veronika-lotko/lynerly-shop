export async function fetchWBData() {
  try {
    const response = await fetch("/api/wb-api");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("WBBBBB", data);

    return data;
  } catch (error) {
    console.error("Error WB:", error);
    return null;
  }
}
