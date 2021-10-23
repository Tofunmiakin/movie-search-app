import axios from "axios";

const key = 'dff4a91d49ad334e41a5e1c2973fa9d8';
const url = 'https://api.themoviedb.org/3';
const trendingUrl = `${url}/tv/popular`
const posterUrl = 'https://image.tmdb.org/t/p/original/'

const FetchTrending = async () => {
  try {
    const { data } = await axios.get(trendingUrl, {
      params: {
        api_key: key,
        language: 'en-US',
        page: 1,
      }
    })

    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backDrop: posterUrl + m['backdrop_path'],
      title: m['name'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average']
    }))

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
}

export default FetchTrending;