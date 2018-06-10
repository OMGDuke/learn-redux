import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Main = props => (
  <div>
    <h1>
      <Link to="/">Reduxstagram</Link>
    </h1>
    {React.cloneElement(props.children)}
  </div>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
