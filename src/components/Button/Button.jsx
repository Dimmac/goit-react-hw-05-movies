import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export default function Layout({ onClick }) {
  return (
    <ButtonLoadMore type="button" onClick={() => onClick()}>
      Load more
    </ButtonLoadMore>
  );
}

Layout.propTypes = {
  onClick: PropTypes.func.isRequired,
};
