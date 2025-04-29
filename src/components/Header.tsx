
import { useState } from 'react';

const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-6 md:px-8 border-b border-mint/30 bg-mint/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="bg-mint h-10 w-10 rounded-lg flex items-center justify-center mr-3">
            <span className="text-xl font-bold">🏠</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-mint-dark to-peach-dark bg-clip-text text-transparent">
            UDAAN 2.9
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About
          </button>
          <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Help
          </button>
          <button className="px-4 py-2 rounded-full bg-mint text-foreground font-medium hover:bg-mint-dark transition-all">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
