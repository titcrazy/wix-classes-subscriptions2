import React from "react";
import { Chrono } from "react-chrono";
import data from "app/components/TimelineData/Data";
import 'app/components/TimelineData/style.css';


export default function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", height: "95vh" }}>
        <Chrono
          items={data}
          mode="VERTICAL_ALTERNATING"
          slideShow
          slideItemDuration={4000}
          scrollable={{ scrollbar: false }}
          enableDarkToggle
          cardWidth={650}
          cardHeight={300}
          fontSizes={{
            title: "1rem"
          }}
        >
          <div>
            <div style={{ width: "250px", height: "250px" }}>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="test"
                src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
              />
            </div>
          </div>
          <div>
            <h3>This is a List</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
          <div>
            <h3>Dunkirk</h3>
            <p>
              The Battle of Dunkirk (French: Bataille de Dunkerque) was fought
              in Dunkirk (Dunkerque), France, during the Second World War,
              between the Allies and Nazi Germany. As the Allies were losing the
              Battle of France on the Western Front, the Battle of Dunkirk was
              the defence and evacuation to Britain of British and other Allied
              forces in Europe from 26 May to 4 June 1940.
            </p>
            <p>
              After the Phoney War, the Battle of France began in earnest on 10
              May 1940. To the east, the German Army Group B invaded the
              Netherlands and advanced westward. In response, the Supreme Allied
              Commander—French General Maurice Gamelin—initiated "Plan D" and
              entered Belgium to engage the Germans in the Netherlands. The plan
              relied heavily on the Maginot Line fortifications along the
              German–French border, but German forces had already crossed
              through most of the Netherlands before the French forces arrived.
              Gamelin instead committed the forces under his command, three
              mechanised armies, the French First and Seventh Armies and the
              British Expeditionary Force (BEF), to the River Dyle.
            </p>
          </div>
          <div style={{ margin: "1rem" }}>
            <h3>Table</h3>
            <table>
              <thead>
                <tr>
                  <td>Column 1</td>
                  <td>Column 2</td>
                  <td>Column 3</td>
                  <td>Column 4</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Value 1</td>
                  <td>Value 2</td>
                  <td>Value 3</td>
                  <td>Value 4</td>
                </tr>
                <tr>
                  <td>Value 5</td>
                  <td>Value 6</td>
                  <td>Value 7</td>
                  <td>Value 8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Chrono>
      </div>
    </div>
  );
}
