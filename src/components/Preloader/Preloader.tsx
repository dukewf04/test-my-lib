import React, { FC } from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Preloader: FC = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <Spinner key={index} animation="grow" variant="primary" size="sm" />
      ))}
    </>
  );
};
