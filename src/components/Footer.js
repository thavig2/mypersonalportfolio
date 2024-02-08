import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <div>
          <a href="https://www.linkedin.com/in/thanussha-vignesh-70b0711b3/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
        <div>
          <a href="https://github.com/thavig2/" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div> 
    </div>
  );
}

export default Footer;
