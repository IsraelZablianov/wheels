import React from 'react';
import './App.scss';
import Background from './components/background';

function App() {
  return (
    <>
    <Background />
    <div className="wheels-app">
      <div className="header">
          <div className="left-side">
            <img src={"https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/1655987_10152772697488469_7371064372680920844_n.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_ohc=oOKtUGuw_rkAX_DAEul&_nc_ht=scontent.fsdv1-2.fna&oh=071cfd895bba71403f138341d3149a6c&oe=604D81F5"}/>
          </div>
          <div className="right-side">
            <div className="logo">גלגלים</div>
            <div className="greeding">היי רן גורדון</div>
          </div>
      </div>
      <div className="claims">
        <div className="claim">תביעה חדשה</div>
        <div className="claim">תביעה קיימת</div>
      </div>
      <div className="footer">
      </div>
    </div>
    </>
  );
}

export default App;
