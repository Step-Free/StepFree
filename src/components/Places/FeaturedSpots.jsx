import React from 'react';
import { useTranslation } from 'react-i18next';
import PlaceCard from '@/components/ui/PlaceCard';
import { featuredData } from '@/lib/all_places';

const FeaturedSpots = () => {
    const { t } = useTranslation();
    return (
        <section className="py-16 bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    {t('featured.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredData.map((place) => (
                        <PlaceCard
                            key={place.title}
                            imageUrl={place.img}
                            title={place.title}
                            description={place.desc}
                            url={place.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSpots;
