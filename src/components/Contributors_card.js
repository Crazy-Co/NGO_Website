import React from "react";

export const Card = (props) => {
    return(
        <div className={`card contributors_text ${props.className}`} >
        <div className="wrapper_h">
          <div className="person wrapper_v">
            <div className="image">
              <img src="https://picsum.photos/300/300" alt="" />
            </div>
            <div className="name">
              <span>Voldemort</span>
              <h2>Tom Riddle</h2>
            </div>
          </div>
          <div className="testimony">
            <span>"</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              quibusdam nam iure officia consectetur iste dolorem maxime aut
              velit sint eaque tenetur omnis illo, quisquam error cumque fugit
              ducimus adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti veniam molestias fugiat sunt itaque. Nobis unde est deserunt ullam error nulla, itaque atque beatae quod soluta eos ducimus! Velit, exercitationem!
            </p>
            <span id="endQuotes">"</span>
          </div>
        </div>
      </div>
    );
}