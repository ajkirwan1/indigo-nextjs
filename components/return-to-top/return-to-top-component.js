/** @format */
"use client";
import React, { useState, useEffect } from 'react';
import classes from "./return-to-top-component.module.css"

export default function ReturnToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
          // Show button if the user scrolls down 500px, hide if above 500px
          if (window.scrollY > 500) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <div>
      {isVisible && (
        <button
        className={classes.ScrollToTopButton}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
}
