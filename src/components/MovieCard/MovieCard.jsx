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

  return (
    <Section>
      <ImageContainer>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `${img}`
          }
          alt={name}
        />
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
