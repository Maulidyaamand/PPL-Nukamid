import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
// const axios = require('axios').default
import axios from "axios";
export default class BerandaController {

  public async index({ view }: HttpContextContract) {
    let movie = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2M3MDRhMGEwYmY0MjJiMWIxOWQzZmRlYzhlNmYxZCIsInN1YiI6IjYzNjI0NDViNDIwMjI4MDA3OThiZjU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tEbAESEXDTgB_0rNhpN43ISmpJsFg9mNPv8YSR1V6_A",
        },
      }
    );
    movie = movie.data.results;

    let nowPlay = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2M3MDRhMGEwYmY0MjJiMWIxOWQzZmRlYzhlNmYxZCIsInN1YiI6IjYzNjI0NDViNDIwMjI4MDA3OThiZjU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tEbAESEXDTgB_0rNhpN43ISmpJsFg9mNPv8YSR1V6_A",
        },
      }
    );
    nowPlay = nowPlay.data.results;

    let upComing = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2M3MDRhMGEwYmY0MjJiMWIxOWQzZmRlYzhlNmYxZCIsInN1YiI6IjYzNjI0NDViNDIwMjI4MDA3OThiZjU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tEbAESEXDTgB_0rNhpN43ISmpJsFg9mNPv8YSR1V6_A",
        },
      }
    );
    upComing = upComing.data.results;

    let mostView = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2M3MDRhMGEwYmY0MjJiMWIxOWQzZmRlYzhlNmYxZCIsInN1YiI6IjYzNjI0NDViNDIwMjI4MDA3OThiZjU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tEbAESEXDTgB_0rNhpN43ISmpJsFg9mNPv8YSR1V6_A",
        },
      }
    );
    mostView = mostView.data.results;

    return view.render("page/beranda", { movie, nowPlay, upComing , mostView});
  }
}
