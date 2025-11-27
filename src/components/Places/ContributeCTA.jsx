import React, { useState } from 'react';
import AddPlaceDialog from './AddPlaceDialog';

const ContributeCTA = ({ onAddPlace }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleAddPlace = (newPlace) => {
        onAddPlace(newPlace);
        setIsDialogOpen(false);
    };

    return (
        <>
            <section className="bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Contribute to Our Community
                    </h2>
                    <p className="text-lg text-blue-100 dark:text-blue-200 mb-8">
                        Help us expand our database by adding new accessible places. Share your finds and detail the accessibility features to help others in the community.
                    </p>
                    <button
                        onClick={() => setIsDialogOpen(true)}
                        className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
                    >
                        Add a New Place
                    </button>
                </div>
            </section>

            <AddPlaceDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSubmit={handleAddPlace}
            />
        </>
    );
};

export default ContributeCTA;
