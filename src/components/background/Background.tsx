import React from 'react';
import './Background.scss';

function Background() {
  return (
    <div className="background">
      <div className="before-wave"></div>
      <div className="wave">
        <svg className="first-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#285181" fillOpacity="1" d="M0,288L60,277.3C120,267,240,245,360,202.7C480,160,600,96,720,85.3C840,75,960,117,1080,133.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <svg className="second-wave"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6bb5ff" fillOpacity="1" d="M0,320L40,314.7C80,309,160,299,240,256C320,213,400,139,480,128C560,117,640,171,720,186.7C800,203,880,181,960,170.7C1040,160,1120,160,1200,160C1280,160,1360,160,1400,160L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        {/* <svg className="second-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6bb5ff" fill-opacity="1" d="M0,288L60,277.3C120,267,240,245,360,202.7C480,160,600,96,720,85.3C840,75,960,117,1080,133.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
      </div>
      <div className="after-wave"></div>
    </div>
  );
}

export default Background;
