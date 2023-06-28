import React from 'react';
import '../index.css'

function Skills() {
  return (
    <div className="skils" id="skills-section2">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="skills-application">
        <div id="imagen">
          <div id="info">
            <p id="headline">React</p>
            <p id="descripcion">
              In this library I have a knowledge of 60% which allows me to constantly develop,
              it is in constant learning, but I also manage some of the "Hooks" that exist in this library.
            </p>
          </div>
        </div>
        <div id="imagen2">
          <div id="info2">
            <p id="headline2">Java</p>
            <p id="descripcion2">In java I have various knowledge such as variables,
             data types, control structures "such as loops and conditionals" and methods, also, I have knowledge of the principles of object-oriented programming in java, such as classes, objects, inheritance, polymorphism, encapsulation,
             abstraction and much more.</p>
          </div>
        </div>
        <div id="imagen3">
          <div id="info3">
            <p id="headline3">JavaScrip</p>
            <p id="descripcion3">In this programming language I have a knowledge of 80% for which,
             there is broader knowledge such as declaration of variables, blues, as well as DOM management,
             Ajax, HTTP requests, asynchronous programming, data manipulation and data structures and much more..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
