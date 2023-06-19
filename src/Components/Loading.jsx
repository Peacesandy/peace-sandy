import React, { useEffect } from 'react'
import '../Styles/Loading.css';

import { preLoaderAnim } from '../Animations';


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Writer,</span>
        <span>Creative.</span>
      </div>
    </div>
  );
};

export default PreLoader;

