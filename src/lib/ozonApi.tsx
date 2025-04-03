export async function fetchOzonData() {
  try {
    const response = await fetch("/api/ozon-api");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.error("Error OZON:", error);
    return null;
  }
}
