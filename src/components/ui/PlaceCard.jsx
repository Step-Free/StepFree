import React from 'react';

import { useTranslation } from 'react-i18next';

const PlaceCard = ({ imageUrl, title, description, url, searchQuery }) => {
  const { t } = useTranslation();
  const highlightText = (text, query) => {
    if (!query) return text;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-white rounded-sm px-0.5">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-none dark:border dark:border-gray-700 overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e2e8f0/94a3b8?text=Image+Not+Found'; }}
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{highlightText(title, searchQuery)}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{highlightText(description, searchQuery)}</p>
        <a
          href={url || '#'}
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"

          target="_blank"
          rel="noopener noreferrer"
        >
          {t('common.readMore')}
        </a>
      </div>
    </div>
  );
};

export default PlaceCard;