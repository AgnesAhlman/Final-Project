import React from 'react';
import Lottie from 'lottie-react';
import loading from '../assets/loading.json';

const Loading = () => {
  return <Lottie animationData={loading} style={{ width: '6rem' }} />;
};

export default Loading;
