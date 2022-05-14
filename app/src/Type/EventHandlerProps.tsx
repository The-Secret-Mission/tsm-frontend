import React from 'react';

export type MouseEventHandler = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
};

export type ChangeEventHandler = {
  onChange?: (e: React.ChangeEvent<HTMLElement>) => void;
};

export type KeyboardEventHander = {
  onKeyPress?: (e: React.KeyboardEvent<HTMLElement>) => void;
};
