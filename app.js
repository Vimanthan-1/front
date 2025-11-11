import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { motion } from 'framer-motion'; // For animations
import './App.css'; // We will create this file next

// Import your mascot image
import mascotLogo from './assets/mascot.png';

// --- Animation Settings ---
// This defines the "fade and slide up" animation
const contentAnimation = {
  // Start (hidden)
  initial: { 
    opacity: 0, 
    y: 30 
  },
  // End (visible)
  animate: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.6, 0.05, -0.01, 0.9] 
    },
  },
};

// --- The Main App Component ---
const App = () => (
  <ReactFullpage
    licenseKey={'YOUR_LICENSE_KEY'} // You can get a free key from fullPage.js
    scrollingSpeed={1000} /* This is the "smooth" part */
    navigation
    anchors={['home', 'about', 'themes', 'schedule', 'prizes', 'register']}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>

          {/* === Section 1: Hero === */}
          <div className="section hero">
            <motion.div 
              className="content"
              variants={contentAnimation}
              initial="initial"
              animate="animate" // Animate on load
            >
              <h1>Hacksymmetric</h1>
              <p>An official hackathon by the Asymmetric club. Get ready to challenge your limits.</p>
              <a href="#register" className="cta-button">Register Now</a>
            </motion.div>
          </div>

          {/* === Section 2: About the Club === */}
          <div className="section about-club">
            <motion.div 
              className="content"
              variants={contentAnimation}
              initial="initial"
              animate={state.destination?.anchor === 'about' ? 'animate' : 'initial'}
            >
              {/* HERE IS YOUR MASCOT! */}
              <img src={mascotLogo} alt="Asymmetric Mascot" className="mascot" />
              <h1>We Are Asymmetric</h1>
              <p>We're the official tech club, dedicated to breaking conventions and building the future. This is our flagship event.</p>
            </motion.div>
          </div>

          {/* === Section 3: Themes === */}
          <div className="section themes">
            <motion.div 
              className="content"
              variants={contentAnimation}
              initial="initial"
              animate={state.destination?.anchor === 'themes' ? 'animate' : 'initial'}
            >
              <h1>Tracks & Themes</h1>
              <p>Theme is yet to be decided. Stay tuned! We'll be announcing our exciting tracks soon.</p>
            </motion.div>
          </div>

          {/* === Section 4: Schedule === */}
          <div className="section schedule">
            <motion.div 
              className="content"
              variants={contentAnimation}
              initial="initial"
              animate={state.destination?.anchor === 'schedule' ? 'animate' : 'initial'}
            >
              <h1>Schedule</h1>
              <p><strong>Day 1:</strong> 9:00 AM - Kick-off | 10:00 AM - Hacking Begins<br />
                 <strong>Day 2:</strong> 10:00 AM - Submissions Due | 1:00 PM - Closing Ceremony
              </p>
            </motion.div>
          </div>

          {/* === Section 5: Prizes === */}
          <div className="section prizes">
            <motion.div 
              className="content"
              variants={contentAnimation}
              initial="initial"
              animate={state.destination?.anchor === 'prizes' ? 'animate' : 'initial'}
            >
              <h1>Prizes & Swag</h1>
              <p>Over $10,000 in prizes, exclusive swag for all participants, and networking opportunities.</p>
            </motion.div>
          </div>

          {/* === Section 6: Register === */}
          <div className="section register">
            <motion.div 
              className="content"
              variants={contentAnimation}
              initial="initial"
              animate={state.destination?.anchor === 'register' ? 'animate' : 'initial'}
            >
              <h1>Join The Event</h1>
              <p>Registrations are now open. Form your team, grab your spot, and get ready to build.</p>
              <a href="#" className="cta-button" onClick={() => alert('Registration link here!')}>Register Now</a>
            </motion.div>
          </div>

        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;