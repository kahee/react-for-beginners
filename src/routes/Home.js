function Home() {
  const [loading, setLoding] = useState(true);
  const [movies, setMovice] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json();
    setMovice(json.data.movies);
    setLoding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  // https://api.coinpaprika.com/v1/tickers
  return (
    <div>
      <h1>The Coins</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
