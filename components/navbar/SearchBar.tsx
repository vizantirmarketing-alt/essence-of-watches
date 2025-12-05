'use client';

import { useState } from 'react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search:', query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 max-w-md mx-4">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search watches..."
          className="w-full px-4 py-2 pl-10 rounded-full border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#141414] text-[#1A1A1A] dark:text-[#F8F8F8] placeholder:text-[#6B6B6B] dark:placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#C9A962] dark:focus:ring-[#D4B872] transition-colors"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B6B6B] dark:text-[#A0A0A0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  );
}




