import React from 'react';
import MButton from '@material-ui/core/Button';

import ticket_icon from './../resources/images/icons/ticket.png';

const Button = ({ link, color, bck, children }) => (
  <MButton
    href={link}
    variant="contained"
    size="small"
    style={{ background: bck, color: color }}
  >
    <img src={ticket_icon} className="iconImage" alt="icon button" />
    {children}
  </MButton>
);

export default Button;
