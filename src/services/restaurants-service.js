export default class RestaurantsService {
  _apiBase = "https://us-restaurant-menus.p.rapidapi.com";

  getResource = async (url, search) => {
    const res = await fetch(`${this._apiBase}${url}search${search}`, {
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

  getAllRestaurants = async (page = 1) => {
    const search = `?page=${page}`;
    const res = await this.getResource("/restaurants/", search);
    return res.result;
  };

  getAllСuisines = () => {
    return [
      {
        title: "Суши",
        value: "sushi",
        icon:
          "https://image-router.dclub.ru/img/specialization/1_enabled_56.png",
      },
      {
        title: "Пицца",
        value: "pizza",
        icon:
          "https://image-router.dclub.ru/img/specialization/2_enabled_60.png",
      },
      {
        title: "Бургеры",
        value: "burger",
        icon:
          "https://image-router.dclub.ru/img/specialization/3_enabled_67.png",
      },
      {
        title: "Фастфуд",
        value: "fastfood",
        icon:
          "https://image-router.dclub.ru/img/specialization/4_enabled_87.png",
      },
      {
        title: "Шашлыки",
        value: "shashliki",
        icon:
          "https://image-router.dclub.ru/img/specialization/5_enabled_25.png",
      },
      {
        title: "Азиатская",
        value: "asia",
        icon:
          "https://image-router.dclub.ru/img/specialization/6_enabled_57.png",
      },
      {
        title: "Пироги",
        value: "pirogi",
        icon:
          "https://image-router.dclub.ru/img/specialization/7_enabled_45.png",
      },
      {
        title: "Десерты",
        value: "dessert",
        icon:
          "https://image-router.dclub.ru/img/specialization/8_enabled_62.png",
      },
      {
        title: "Здоровая еда",
        value: "zdorovaya",
        icon:
          "https://image-router.dclub.ru/img/specialization/9_enabled_86.png",
      },
      {
        title: "Мясо и рыба",
        value: "meat",
        icon:
          "https://image-router.dclub.ru/img/specialization/10_enabled_27.png",
      },
      {
        title: "Обеды",
        value: "obedy",
        icon:
          "https://image-router.dclub.ru/img/specialization/11_enabled_82.png",
      },
      {
        title: "Русская",
        value: "russkaya",
        icon:
          "https://image-router.dclub.ru/img/specialization/12_enabled_33.png",
      },
      {
        title: "Узбекская",
        value: "uzbekskaya",
        icon:
          "https://image-router.dclub.ru/img/specialization/13_enabled_77.png",
      },
    ];
  };

  getСuisine = async (page = 1, cuisine) => {
    const strJSON = JSON.stringify({ cuisines: cuisine });
    const search = `/fields?page=${page}&fields=${strJSON}`;
    const res = await this.getResource("/restaurants/", search);
    return res.result;
  };
}
