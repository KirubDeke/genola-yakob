"use client";
import { Footer } from "flowbite-react";
import { Link } from 'react-router-dom';

export function FooterSection() {
  return (
    <Footer container style={{ backgroundColor: '#333' }}>
      <div className="w-full text-center" style={{ color: 'white' }}>
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="logo" style={{ color: 'white' }}>
            Genola &<span style={{ color: 'white' }}>Yakob C.</span>
          </Link>
          <Footer.LinkGroup className="flex space-x-4"> 
            <Link to="/projects" style={{ color: 'white' }}>
              Projects
            </Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="flex justify-between items-center">
          <div className="flex-grow text-center">
            <Footer.Copyright href="#" by="Genola & Yakob Construction™" year={2024} />
          </div>
          <div className="flex-shrink-0">
          </div>
        </div>
      </div>
    </Footer>
  );
}