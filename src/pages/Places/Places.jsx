import React, { useState } from 'react';
import Hero from '@/components/Places/Hero';
import FeaturedSpots from '@/components/Places/FeaturedSpots';
import AllPlaces from '@/components/Places/AllPlaces';
import ContributeCTA from '@/components/Places/ContributeCTA';
import { usePlacesStorage } from '@/hooks/usePlacesStorage';

const Places = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { allPlaces, addPlace } = usePlacesStorage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased">
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        allPlaces={allPlaces}
      />
      <FeaturedSpots />
      <AllPlaces
        searchQuery={searchQuery}
        allPlaces={allPlaces}
      />
      <ContributeCTA onAddPlace={addPlace} />
    </div>
  );
}

export default Places;