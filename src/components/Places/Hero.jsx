import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SearchIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

const Hero = ({ searchQuery, setSearchQuery, allPlaces }) => {
    const { t } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);

    const filteredDropdown = allPlaces.filter((place) =>
        place.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);

    return (
        <div className="w-full bg-linear-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 py-20 md:py-28 text-center relative">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('hero.title')}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    {t('hero.subtitle')}
                </p>

                <div className="max-w-xl mx-auto relative text-left rtl:text-right">
                    <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder={t('hero.searchPlaceholder')}
                        className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setShowDropdown(true);
                        }}
                        onFocus={() => setShowDropdown(true)}
                        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                    />

                    {showDropdown && searchQuery && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
                            {filteredDropdown.length > 0 ? (
                                filteredDropdown.map((place) => (
                                    <a
                                        key={place.title}
                                        href={place.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-0 transition-colors"
                                    >
                                        <img src={place.img} alt={place.title} className="w-10 h-10 rounded object-cover mr-3 rtl:mr-0 rtl:ml-3" />
                                        <div className="flex-1 min-w-0 text-left rtl:text-right">
                                            <div className="font-medium text-gray-900 dark:text-white truncate">{place.title}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{place.desc}</div>
                                        </div>
                                    </a>
                                ))
                            ) : (
                                <div className="px-4 py-3 text-gray-500 dark:text-gray-400 text-left rtl:text-right">{t('allPlaces.noResults')}</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;
