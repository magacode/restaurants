export default class RestaurantsService {
  _apiBase = "https://us-restaurant-menus.p.rapidapi.com";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json;
  };

  getAllRestaurants = async () => {};
}
