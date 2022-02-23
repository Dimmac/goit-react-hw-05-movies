// import PropTypes from 'prop-types';
// import { ButtonLoadMore } from './Button.styled';

// export default function Button({ onClick }) {
//   return (
//     <ButtonLoadMore type="button" onClick={() => onClick()}>
//       Load more
//     </ButtonLoadMore>
//   );
// }

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const Link = styled(NavLink)`
  &.active {
    color: aqua;
  }
`;

const Wrapper = styled.div`
  padding: 40px;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/preview">Preview</Link>
        <Link to="/list">List</Link>
        <Link to="/create">Create</Link>
      </Nav>
      Layout
    </Wrapper>
  );
};
