import img from '../../images/no-poster1.png';
import {
  Section,
  Image,
  ImageContainer,
  Title,
  TextGenres,
} from './MovieCard.styled';

const MovieCard = ({ dataVideo }) => {
  const {
    poster_path,
    name,
    original_title,
    release_date,
    first_air_date,
    vote_average,
    overview,
    genres,
  } = dataVideo;

  let filmYear;
  release_date !== undefined
    ? (filmYear = release_date)
    : (filmYear = first_air_date);
  if (!release_date && !first_air_date) {
    filmYear = '';
  }

  const isPosterPath = poster => {
    const imageUrl = `http://image.tmdb.org/t/p/original`;
    if (poster !== null) {
      return `${imageUrl}${poster}`;
    }
    return `${img}`;
  };

  return (
    <Section>
      <ImageContainer>
        <Image src={isPosterPath(poster_path)} alt={original_title} />
      </ImageContainer>
      <div>
        <Title>
          {original_title || name} ({filmYear.slice(0, 4)})
        </Title>
        <p>User score: {Math.round((vote_average * 100) / 10)}%</p>
        <h2>Overviev</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && (
          <TextGenres>{genres.map(genre => genre.name).join(', ')}</TextGenres>
        )}
      </div>
    </Section>
  );
};

export default MovieCard;
