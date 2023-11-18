import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getListingbyId } from '../services/CustomListingsAPI';

const ListingDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getListingbyId(id);
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!data || data.length === 0) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    const listing = data[0];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-12 px-6 md:px-12">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-64 object-cover" src={listing.image} alt={listing.name} />
                    <div className="p-6">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{listing.name}</h1>
                        <p className="text-gray-500 mb-2 italic">Posted by: {listing.username}</p>
                        <p className="text-gray-700 text-lg mb-6">{listing.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="text-lg text-gray-700">
                                <p><span className="font-semibold">Bedrooms:</span> {listing.bedrooms}</p>
                                <p><span className="font-semibold">Bathrooms:</span> {listing.bathrooms}</p>
                            </div>
                            <div className="text-lg text-gray-700">
                                <p><span className="font-semibold">Price:</span> <span className="text-blue-600">${listing.price}</span></p>
                                <p><span className="font-semibold">Amenities:</span> {listing.amenities.join(', ')}</p>
                            </div>
                        </div>
                        <div className="text-lg text-gray-700 mb-6">
                            <p><span className="font-semibold">Smoking Allowed:</span> {listing.smoking_allowed ? 'Yes' : 'No'}</p>
                            <p><span className="font-semibold">Drinking Allowed:</span> {listing.drinking_allowed ? 'Yes' : 'No'}</p>
                            <p><span className="font-semibold">Vegan Friendly:</span> {listing.vegan_friendly ? 'Yes' : 'No'}</p>
                            <p><span className="font-semibold">Pets Allowed:</span> {listing.pets_allowed ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingDetails;
