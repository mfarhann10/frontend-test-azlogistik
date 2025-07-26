import axios from "axios";


export async function getPoke(params = { limit: 20, offset: 0 }) {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      params,
    });

    return res.data.results; // array of { name, url }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log(err.response?.data);
    }
    return [];
  }
}
