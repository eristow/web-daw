/**
 *
 * DrumPad
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Pad from './Pad';

function DrumPad(props) {
  // TODO: can this be a prop/moved to caller?
  const handleClick = () => {
    let audio = new Audio(props.src);
    audio.load();
    audio.play();
    audio = null;
  };

  return (
    <div>
      <Pad onClick={handleClick}>{props.name}</Pad>
    </div>
  );
}

DrumPad.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

export default DrumPad;
