import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
export default function Loading() {
    return (
        <>
          <Spinner animation="border" size="sm" />
          <Spinner animation="border" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" />
        </>
      );
}
