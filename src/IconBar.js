import React from 'react';
import './IconBar.css'; // 确保创建一个对应的CSS文件
import userIcon from './assets/icons/example-user.png';
import explainEverythingIcon from './assets/icons/app-explain-everything.svg';
import annotateIcon from './assets/icons/app-annotate.svg';
import timerIcon from './assets/icons/app-timer.svg';
import spinnerIcon from './assets/icons/app-spinner.svg';
import screenShareIcon from './assets/icons/app-screenshare.svg';
import moreIcon from './assets/icons/app-more.svg';

const icons = [
  { name: 'TestProm', icon: userIcon },
  { name: 'Whiteboard', icon: explainEverythingIcon },
  { name: 'Annotate', icon: annotateIcon },
  { name: 'Timer', icon: timerIcon },
  { name: 'Spinner', icon: spinnerIcon },
  { name: 'Screen Share', icon: screenShareIcon },
  { name: 'More', icon: moreIcon },
];

const handleClick = (name) => {
  if (name === 'Screen Share') {
    window.location.href = 'promethean://test2/Hello/World/This/Is/Additional/Parameters';
  } else {
    alert(`${name} icon clicked`);
  }
};

const handleMoreClick = async () => {
  try {
    const devices = await navigator.hid.requestDevice({ filters: [] });
    if (devices.length > 0) {
      const device = devices[0];
      await device.open();
      alert('USB HID device connected');
    } else {
      alert('No USB HID devices found');
    }
  } catch (error) {
    console.error('There was an error connecting to the USB HID device:', error);
  }
};

const IconBar = () => {
  return (
    <div className="icon-bar">
      <div className="icon-section">
        <div className="icon-item">
          <button 
            className="icon-button" 
            onClick={() => handleClick('TestProm')} 
            onTouchStart={() => handleClick('TestProm')}
          >
            <img src={userIcon} alt="TestProm" className="icon-image" />
          </button>
          <div className="icon-text">TestProm</div>
        </div>
      </div>
      <div className="icon-section middle">
        {icons.slice(1, -1).map((item, index) => (
          <div key={index} className="icon-item">
            <button 
              className="icon-button" 
              onClick={() => handleClick(item.name)} 
              onTouchStart={() => handleClick(item.name)}
            >
              <img src={item.icon} alt={item.name} className="icon-image" />
            </button>
            <div className="icon-text">{item.name}</div>
          </div>
        ))}
      </div>
      <div className="icon-section">
        <div className="icon-item">
          <button 
            className="icon-button" 
            onClick={handleMoreClick} 
            onTouchStart={handleMoreClick}
          >
            <img src={moreIcon} alt="More" className="icon-image" />
          </button>
          <div className="icon-text">More</div>
        </div>
      </div>
    </div>
  );
};

export default IconBar;