import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

// useParams :id 를 받을 수 있음
function Detail() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  // id 가 변경될때마다 새로운 영화렌더링 하게 해야해서
  // 물론 디테일 페이지 특성상 하나만 보여줘서 상관없으나,안전함을 위해 id 추가
  useEffect(() => {
    getMoive();
  }, [id]);
  console.log(movie);

  // Check if the movie is still null or undefined
  if (!movie) {
    return <div>Loading...</div>; // Show a loading message while the data is being fetched
  }

  return (
    <div>
      <Movie
        key={movie.id}
        id={movie.id}
        coverImg={movie.medium_cover_image}
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
      />
    </div>
  );
}

export default Detail;
