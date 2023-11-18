import React, { useEffect, useState } from 'react';
import { ListingView } from "../components/ListingView";
import { getCustomListings } from "../services/CustomListingsAPI";
import { FormControlLabel, Checkbox } from '@mui/material';

const ViewListings = () => {
    const [data, setApartmentsData] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        smokingAllowed: false,
        drinkingAllowed: false,
        veganFriendly: false,
        petsAllowed: false
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCustomListings();
                setApartmentsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const toggleFilters = () => setShowFilters(!showFilters);

    const handleFilterChange = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.checked });
    };

    const filteredData = data.filter(apt =>
        (filters.smokingAllowed ? apt.smoking_allowed === filters.smokingAllowed : true) &&
        (filters.drinkingAllowed ? apt.drinking_allowed === filters.drinkingAllowed : true) &&
        (filters.veganFriendly ? apt.vegan_friendly === filters.veganFriendly : true) &&
        (filters.petsAllowed ? apt.pets_allowed === filters.petsAllowed : true)
    );

    return (
        <div className="container mx-auto flex flex-col items-stretch">
            <button onClick={toggleFilters} className="bg-blue-500 text-white px-4 py-2 rounded-md m-4 w-24 ">
                {showFilters ? 'Hide' : 'Show'} Filters
            </button>
            
            {showFilters && (
                <div className="p-4 bg-gray-200 rounded-md m-4">
                    <FormControlLabel 
                        control={
                            <Checkbox
                                checked={filters.smokingAllowed}
                                onChange={handleFilterChange}
                                name="smokingAllowed"
                            />
                        }
                        label="Smoking Allowed"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filters.drinkingAllowed}
                                onChange={handleFilterChange}
                                name="drinkingAllowed"
                            />
                        }
                        label="Drinking Allowed"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filters.veganFriendly}
                                onChange={handleFilterChange}
                                name="veganFriendly"
                            />
                        }
                        label="Vegan Friendly"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filters.petsAllowed}
                                onChange={handleFilterChange}
                                name="petsAllowed"
                            />
                        }
                        label="Pets Allowed"
                    />
                </div>
            )}
            
            {filteredData.map((apt) => <ListingView key={apt.id} data={apt} />)}
        </div>
    );
};

export default ViewListings;
