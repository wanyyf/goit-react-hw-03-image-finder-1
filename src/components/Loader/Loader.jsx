import { Dna } from 'react-loader-spinner';
import React from 'react';

export const Loader = () => {
  const styles = {
    display: 'flex',

    justifyContent: 'center',
    height: '100vh',
  };
  return (
    <div style={styles}>
      <Dna
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
