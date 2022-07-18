const API_KEY = "15c8f59ed79b815e5a22401921e0c3aa";
const BASE_URL = "https://api.themoviedb.org";

export async function getData(param, page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}/${param}?api_key=${API_KEY}&page=${page}`
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (e) {
    console.error(e);
  }
}
