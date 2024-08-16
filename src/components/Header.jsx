import * as React from 'react';
import HeaderXl from './Headers/HeaderXl';
import HeaderSm from './Headers/HeaderSm';
import HeaderXs from './Headers/HeaderXs';

export function Header() {
  return (
    <>
      <HeaderXl />
      <HeaderSm />
      <HeaderXs />
    </>
  );
}
