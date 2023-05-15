import axios from "axios";

export default class MovieController {
  async show({ params, view }) {
    const movieId = params.id;

    try {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=9a0b4200f5d0fe2c0ebed20e08d0bc52`
      );
      const creditsResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9a0b4200f5d0fe2c0ebed20e08d0bc52`
      );

      const movie = movieResponse.data;
      const cast = creditsResponse.data.cast;

      // Get cast photos
      const castWithPhotos = await Promise.all(
        cast.map(async (castMember) => {
          const personResponse = await axios.get(
            `https://api.themoviedb.org/3/person/${castMember.id}?api_key=9a0b4200f5d0fe2c0ebed20e08d0bc52&append_to_response=images`
          );
          const person = personResponse.data;
          const profilePhotos = person.images?.profiles;

          // Set the first profile photo if available
          castMember.photo = profilePhotos?.[0]?.file_path || null;

          return castMember;
        })
      );
      const crew = creditsResponse.data.crew;
      const director = crew.find((member) => member.job === "Director");

      const movieDirector = director ? director.name : "Unknown Director";

      const imagesResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=9a0b4200f5d0fe2c0ebed20e08d0bc52`
      );
      const backdrops = imagesResponse.data.backdrops;

      return view.render("page/moviedesc", {
        movie,
        cast: castWithPhotos,
        movieDirector,
        backdrops,
      });
    } catch (error) {
      console.error(error);
      return view.render("errors/not-found");
    }
  }
}
