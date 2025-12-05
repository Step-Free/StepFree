import { useState, useEffect } from 'react';
import { allAccessiblePlaces as defaultPlaces } from '@/lib/all_places';

const STORAGE_KEY = 'accessiblePlaces';

export const usePlacesStorage = () => {
    const [allPlaces, setAllPlaces] = useState([]);

    
    useEffect(() => {
        const storedPlaces = localStorage.getItem(STORAGE_KEY);
        if (storedPlaces) {
            try {
                const parsed = JSON.parse(storedPlaces);
                setAllPlaces(parsed);
            } catch (error) {
                console.error('Error parsing stored places:', error);
                setAllPlaces(defaultPlaces);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPlaces));
            }
        } else {
            setAllPlaces(defaultPlaces);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPlaces));
        }
    }, []);

  
    const addPlace = (newPlace) => {
        const updatedPlaces = [...allPlaces, newPlace];
        setAllPlaces(updatedPlaces);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPlaces));
    };

  
    const removePlace = (placeTitle) => {
        const updatedPlaces = allPlaces.filter(place => place.title !== placeTitle);
        setAllPlaces(updatedPlaces);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPlaces));
    };

    const resetPlaces = () => {
        setAllPlaces(defaultPlaces);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPlaces));
    };

    return {
        allPlaces,
        addPlace,
        removePlace,
        resetPlaces
    };
};
