import React from 'react';

function Links(props) {
  return (
    <div className="Links">
      <div className="link fadeInUp" style={{animationDelay: '0.2s'}}>
        <h3>HELPLINE NUMBERS</h3>
        <p>+91-11-23978046</p>
      </div>
      <div className="link fadeInUp" style={{animationDelay: '0.2s'}}>
        <h3>TOLL FREE NUMBER</h3>
        <p>1075</p>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.3s'}}>
        <h3>Ministry of Health and Family Welfare, Gov. of India</h3>
        <a
          href="https://www.mohfw.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.mohfw.gov.in/
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.3s'}}>
        <h3>PM CARE FUND</h3>
        <a
          href="https://pmnrf.gov.in/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://pmnrf.gov.in/en/
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.4s'}}>
        <h3>Helpline Email ID</h3>
        <a href="mailto:ncov2019@gov.in"
        target="_blank"
        rel="noopener noreferrer"
        >
        ncov2019@gov.in 
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.7s'}}>
        <h3>COVID-19 Global Tracker</h3>
        <a
          href="https://coronavirus.thebaselab.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://coronavirus.thebaselab.com/
        </a>
      </div>
    </div>
  );
}

export default Links;
