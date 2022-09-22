import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button onClick={onClick} type="button" className="Button">
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
