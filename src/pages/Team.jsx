import ParticlesBg from 'particles-bg'
import Tilt from 'react-parallax-tilt';

import { useState } from 'react';

const Team = () => {
  
  let config = {
    color:["random", "#ff0000"]
  }
    return (
        <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold">
            Meet the <u className="text-primary dark:text-primary-400">team</u>
          </h2>
  
          <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            <TeamMember
              name="Alan Turing"
              role="Product Manager"
              imgSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
            />
            <TeamMember
              name="Veronica Smith"
              role="Senior Product Designer"
              imgSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).jpg"
            />
            <TeamMember
              name="Tom Johnson"
              role="Marketing Analyst"
              imgSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg"
            />
            <TeamMember
              name="Emma Lovelace"
              role="Advisor"
              imgSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).jpg"
            />
          </div>
        </section>
        
      </div>
    );
  }
  
  function TeamMember({ name, role, imgSrc }) {
    const [scale, setScale] = useState(1.2);
    return (
     
      <div className="mb-12 lg:mb-0">
         <Tilt scale={scale} transitionSpeed={2500}>
         <img className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" src={imgSrc} alt="avatar" />
        </Tilt>
      
      <h5 className="mb-4 text-lg font-bold">{name}</h5>
      <p className="mb-6">{role}</p>
      <ul className="mx-auto flex list-inside justify-center">
        <a href="#!" className="px-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-primary dark:text-primary-400">
            {/* GitHub SVG */}
          </svg>
        </a>
        <a href="#!" className="px-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-primary dark:text-primary-400">
            {/* Twitter SVG */}
          </svg>
        </a>
        <a href="#!" className="px-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-3.5 w-3.5 text-primary dark:text-primary-400">
            {/* LinkedIn SVG */}
          </svg>
        </a>
      </ul>
      <ParticlesBg   type="cobweb" bg={true} />
    </div>
    );
};

export default Team;