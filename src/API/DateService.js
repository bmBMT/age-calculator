import axios from "axios";

export default class DateService {
  static async getDate() {
    const response = await axios.get(
      "http://worldtimeapi.org/api/timezone/Europe/Moscow"
    );
    const currentDate = response.data.datetime.slice(0, 10).split("-");
    const date = {
      day: +currentDate[2],
      month: +currentDate[1],
      year: +currentDate[0],
    };
    return date;
  }
}