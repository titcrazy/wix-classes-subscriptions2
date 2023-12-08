import React from 'react';
import { Chrono } from 'react-chrono';
import data from 'app/components/TimelineData/Data';
import 'app/components/TimelineData/style.css';

export default function App() {
  return (
    <div className="App">
      <div style={{ width: '100%', height: '95vh' }}>
        <Chrono
          items={data}
          mode="VERTICAL_ALTERNATING"
          cardWidth={650}
          cardHeight={300}
          fontSizes={{
            title: '1rem',
          }}
        >
          <div>
            <div>
              <img
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                alt="test"
                src= 'public/home/OurPic.jpg'
              />
            </div>
          </div>
        </Chrono>
      </div>
    </div>
  );
}
