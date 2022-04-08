import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { trendingFetchMoviesById } from '../../services/themoviedbApi';
import MovieCard from '../../components/MovieCard/MovieCard';
import {
  Section,
  Button,
  LinkButton,
  List,
  LinkAdd,
  Title,
  Arrow,
  ArrowInfo,
} from './MovieDetailsPage.style';

export const MovieDetailsPage = () => {
  const [items, setItems] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetch() {
      try {
        const item = await trendingFetchMoviesById(movieId);
        console.log('По Id:', item);
        setItems(item);
      } catch (error) {
        toast.error('There is no review of the video and the cast');
      }
    }
    fetch();
  }, [movieId]);

  const {
    backdrop_path,
    poster_path,
    name,
    original_title,
    release_date,
    first_air_date,
    vote_average,
    overview,
    genres,
  } = items;

  return (
    <>
      <Section>
        <Button type="button">
          <Arrow />
          <LinkButton to={location?.state?.from ?? '/'}>Go back</LinkButton>
        </Button>
        <MovieCard
          dataVideo={{
            backdrop_path,
            poster_path,
            name,
            original_title,
            release_date,
            first_air_date,
            vote_average,
            overview,
            genres,
          }}
        />
      </Section>
      <Title>Additional information</Title>

      <List>
        <li>
          <LinkAdd to={`cast`} state={{ from: location?.state?.from }}>
            Cast <ArrowInfo />
          </LinkAdd>
        </li>
        <li>
          <LinkAdd to={`reviews`} state={{ from: location?.state?.from }}>
            Reviews <ArrowInfo />
          </LinkAdd>
        </li>
      </List>
      <Outlet />
    </>
  );
};
