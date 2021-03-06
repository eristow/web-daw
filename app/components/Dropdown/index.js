/**
 *
 * Dropdown
 *
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Dropdown = styled.select.attrs(props => ({
  padding: props.padding || '10px',
  width: props.width || '10em',
}))`
  background: #ffffff00;
  color: white;
  border: 2px solid deepskyblue;
  border-radius: 4px;
  font-size: 1em;
  padding: ${props => props.padding};
  width: ${props => props.width};
`;

Dropdown.propTypes = {
  padding: PropTypes.string,
  width: PropTypes.string,
};

export default Dropdown;
