export default class RestaurantsService {
  _apiBase = "https://us-restaurant-menus.p.rapidapi.com";

  getResource = async (url, page = 1) => {
    const res = await fetch(`${this._apiBase}${url}search?page=${page}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
        "x-rapidapi-key": "007247cf5amshdd7ab1a205152c1p1f5e22jsn9611dc5c48ff",
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllRestaurants = async (page) => {
    const res = await this.getResource("/restaurants/", page);
    return res.result;
  };
}
