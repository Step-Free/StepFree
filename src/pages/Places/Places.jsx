import React from 'react';
import CategoryCard from '@/components/ui/CategoryCard';
import PlaceCard from '@/components/ui/PlaceCard';


const Places = () => {

  // --- Icon Components (Defined inside Places) ---
  // (Icons use currentColor, so no changes needed for dark mode)
  const SearchIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );

  const BuildingStoreIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A.75.75 0 0 1 14.25 12h.5a.75.75 0 0 1 .75.75v7.5m-7.5 0v-7.5A.75.75 0 0 1 7.5 12h.5a.75.75 0 0 1 .75.75v7.5m-7.5 0v-7.5A.75.75 0 0 1 1.5 12h.5a.75.75 0 0 1 .75.75v7.5m16.5 0v-7.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v7.5m-16.5 0h16.5M3 12h18M3 12V6a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 6v6m-1.5 0V6" />
    </svg>
  );

  const HeartPulseIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.86 14.25a.375.375 0 0 0 .507 0l1.134-.99a.375.375 0 0 1 .507 0l.405.353a.375.375 0 0 0 .507 0l.405-.353a.375.375 0 0 1 .507 0l1.134.99a.375.375 0 0 0 .507 0l.28-.245" />
    </svg>
  );

  const UtensilsIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a.75.75 0 0 0 .75-.75V6.038l2.96 2.685a.75.75 0 0 0 .98-.06.75.75 0 0 0-.06-.98l-4.5-4.05a.75.75 0 0 0-.92 0l-4.5 4.05a.75.75 0 0 0 .92 1.04l2.96-2.685v12a.75.75 0 0 0 .75.75ZM3 21v-4.5A1.5 1.5 0 0 1 4.5 15h15a1.5 1.5 0 0 1 1.5 1.5V21" />
    </svg>
  );

  const BusIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875c0-.621.504-1.125 1.125-1.125h13.5c.621 0 1.125.504 1.125 1.125v1.875" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 14.25v-3.75a1.125 1.125 0 0 1 1.125-1.125h13.5c.621 0 1.125.504 1.125 1.125v3.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 14.25v-3.75a1.125 1.125 0 0 1 1.125-1.125h.75c.621 0 1.125.504 1.125 1.125v3.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 14.25v-3.75a1.125 1.125 0 0 0-1.125-1.125h-.75c-.621 0-1.125.504-1.125 1.125v3.75" />
    </svg>
  );

  const StoreIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );

  const TreeIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-5.13 0-9.75-3.033-9.75-7.875 0-1.89.633-3.69 1.75-5.108a11.94 11.94 0 0 1 1.821-2.467c.22-.292.454-.572.7-.833C8.083 4.237 9.89 3.75 12 3.75c2.11 0 3.917.487 5.478 1.717.246.26.48.54.7.833.67.89 1.282 1.83 1.82 2.467C21.117 10.184 21.75 11.984 21.75 13.875c0 4.842-4.62 7.875-9.75 7.875Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v9" />
    </svg>
  );




  // --- Page Section Components (Defined inside Places) ---
  const Hero = () => {
    return (
      <div className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Accessible Places
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Find and explore inclusive locations designed for all. Search here for places with the accessibility features you need.
          </p>
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <label htmlFor="search-input" className="sr-only">Search</label>
            <input
              type="text"
              id="search-input"
              placeholder="Search for a place, city, or feature..."
              className="flex-grow px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              <SearchIcon className="w-5 h-5 sm:mr-2" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </form>
        </div>
      </div>
    );
  };

  const Categories = () => {
    const categoryData = [
      { title: "Public Facilities", icon: <BuildingStoreIcon className="w-6 h-6" /> },
      { title: "Health Facilities", icon: <HeartPulseIcon className="w-6 h-6" /> },
      { title: "Restaurants", icon: <UtensilsIcon className="w-6 h-6" /> },
      { title: "Transportation Hubs", icon: <BusIcon className="w-6 h-6" /> },
      { title: "Shopping & Services", icon: <StoreIcon className="w-6 h-6" /> },
      { title: "Parks & Recreation", icon: <TreeIcon className="w-6 h-6" /> },
    ];

    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {categoryData.map((category) => (
              <CategoryCard key={category.title} icon={category.icon} title={category.title} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const FeaturedSpots = () => {
    const featuredData = [
      {
        title: "City Central Library",
        desc: "Fully accessible with ramps, elevators, and assistive technology stations.",
        img: "https://placehold.co/400x300/d1d5db/374151?text=City+Library"
      },
      {
        title: "Greenwood Park",
        desc: "Features paved pathways, accessible picnic areas, and an inclusive playground.",
        img: "https://placehold.co/400x300/bbf7d0/166534?text=Greenwood+Park"
      },
      {
        title: "The Modern Brew",
        desc: "Spacious layout for wheelchair maneuverability and accessible restrooms.",
        img: "https://placehold.co/400x300/fde68a/854d0e?text=The+Modern+Brew"
      },
    ];

    return (
      // Using bg-black in dark mode for a slight contrast with the bg-gray-900 sections
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Accessible Spots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredData.map((place) => (
              <PlaceCard key={place.title} imageUrl={place.img} title={place.title} description={place.desc} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const AllPlaces = () => {
    const allPlacesData = [
      {
        title: "City Central Library",
        desc: "Fully accessible with ramps, elevators, and assistive technology stations.",
        img: "https://placehold.co/400x300/d1d5db/374151?text=City+Library"
      },
      {
        title: "Greenwood Park",
        desc: "Features paved pathways, accessible picnic areas, and an inclusive playground.",
        img: "https://placehold.co/400x300/bbf7d0/166534?text=Greenwood+Park"
      },
      {
        title: "The Modern Brew",
        desc: "Spacious layout for wheelchair maneuverability and accessible restrooms.",
        img: "https://placehold.co/400x300/fde68a/854d0e?text=The+Modern+Brew"
      },
      {
        title: "Horizon Aquatic Center",
        desc: "Equipped with pool lifts, accessible changing rooms, and zero-depth entry.",
        img: "https://placehold.co/400x300/bae6fd/0c4a6e?text=Aquatic+Center"
      },
      {
        title: "Art & Culture Museum",
        desc: "Audio guides, large print labels, and wheelchair access throughout all exhibits.",
        img: "https://placehold.co/400x300/fbcfe8/9d2667?text=Art+Museum"
      },
      {
        title: "Central Shopping Mall",
        desc: "Wide corridors, numerous elevators, and accessible parking spots.",
        img: "https://placehold.co/400x300/e9d5ff/581c87?text=Shopping+Mall"
      },
      {
        title: "Cozy Corner Bistro",
        desc: "Ramp access at the entrance, flexible seating arrangements, and large-print menus.",
        img: "https://placehold.co/400x300/fecaca/991b1b?text=Cozy+Bistro"
      },
      {
        title: "Atlas Bank",
        desc: "Talking ATMs, low-height counters, and automatic doors for easy access.",
        img: "https://placehold.co/400x300/cccccc/111827?text=Atlas+Bank"
      },
      {
        title: "Assisted Living Hub",
        desc: "Comprehensive support services and barrier-free living spaces.",
        img: "https://placehold.co/400x300/fed7aa/c2410c?text=Living+Hub"
      },
    ];

    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            All Accessible Places
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allPlacesData.map((place) => (
              <PlaceCard key={place.title} imageUrl={place.img} title={place.title} description={place.desc} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContributeCTA = () => {
    return (
      <section className="bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Contribute to Our Community
          </h2>
          <p className="text-lg text-blue-100 dark:text-blue-200 mb-8">
            Help us expand our database by adding new accessible places. Share your finds and detail the accessibility features to help others in the community.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Add a New Place
          </a>
        </div>
      </section>
    );
  };

  // --- Main Return Statement for Places Component ---
  // Renders all sections within the root div
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased">
      <Hero />
      <Categories />
      <FeaturedSpots />
      <AllPlaces />
      <ContributeCTA />
    </div>
  );
}

export default Places;