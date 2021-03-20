// Core
// eslint-disable-next-line no-use-before-define
import React, { FC, useState } from 'react';

type PropTypes = {
  title?: string;
  children?: never;
};

const Header: FC<PropTypes> = ({ title }: PropTypes) => {
  const titleString = typeof title === 'string' ? title.toUpperCase() : null;
  const [counter, setCounter] = useState<number>(5);

  const increase = (): void => {
    setCounter((prev) => prev + 1);
  };

  const decrease = (): void => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <h1>{titleString}</h1>
      <h3>{counter.toFixed()}</h3>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={increase}>increase</button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={decrease}>decrease</button>
    </>
  );
};

Header.defaultProps = {
  title: 'Header title',
};

export default Header;
