import React from 'react';
import PlaceCard from '@/components/ui/PlaceCard';

const AllPlaces = ({ searchQuery, allPlaces }) => {
    const filteredPlaces = allPlaces
        .filter((place) =>
            place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            place.desc.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                    All Accessible Places
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredPlaces.length > 0 ? (
                        filteredPlaces.map((place, index) => (
                            <PlaceCard
                                key={`${place.title}-${index}`}
                                imageUrl={place.img}
                                title={place.title}
                                description={place.desc}
                                url={place.url}
                                searchQuery={searchQuery}
                            />
                        ))
                    ) : (
                        <p className="text-center col-span-3 text-gray-500 dark:text-gray-400">
                            No places found matching your search.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllPlaces;
