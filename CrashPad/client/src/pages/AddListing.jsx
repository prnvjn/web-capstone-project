import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, InputLabel, FormControl, Chip, OutlinedInput, Box } from '@mui/material';
import { createListing } from '../services/CustomListingsAPI';


const AddListing = () => {
    const [listing, setListing] = useState({
        user_id: 1,
        name: '',
        address: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        amenities: [],
        description: '',
        image: 'https://via.placeholder.com/400',
        roommatePreferences: {
            gender: 'Any',
            smokingAllowed: false,
            drinkingAllowed: false,
            veganFriendly: false,
            petsAllowed: false
        }
    });

    const amenitiesOptions = ["Wi-Fi", "Parking", "Laundry", "Pool", "Gym", "Air Conditioning"];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setListing({ ...listing, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setListing({
            ...listing,
            roommatePreferences: { ...listing.roommatePreferences, [name]: checked }
        });
    };

    const handleAmenitiesChange = (event) => {
        const {
            target: { value },
        } = event;
        setListing({
            ...listing,
            amenities: typeof value === 'string' ? value.split(',') : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const listingData = {
            ...listing,
            image: listing.image || 'https://via.placeholder.com/400' // Ensure a default image is set
        };
        try {
            await createListing(listingData);
            window.location.href = '/view-listings';
        } catch (error) {
            console.error(error);
            // handle error here
        }
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 3 }}>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 500 }}>
                <TextField
                    label="Name"
                    name="name"
                    value={listing.name}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Address"
                    name="address"
                    value={listing.address}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Price"
                    name="price"
                    type="number"
                    value={listing.price}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Bedrooms"
                    name="bedrooms"
                    type="number"
                    value={listing.bedrooms}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Bathrooms"
                    name="bathrooms"
                    type="number"
                    value={listing.bathrooms}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="amenities-label">Amenities</InputLabel>
                    <Select
                        labelId="amenities-label"
                        multiple
                        value={listing.amenities}
                        onChange={handleAmenitiesChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Amenities" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {amenitiesOptions.map((amenity) => (
                            <MenuItem key={amenity} value={amenity}>
                                {amenity}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label="Description"
                    name="description"
                    value={listing.description}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                />
                <FormGroup>
                    <h3>Roommate Preferences</h3>
                    <FormControlLabel
                        control={<Checkbox checked={listing.roommatePreferences.smokingAllowed} onChange={handleCheckboxChange} name="smokingAllowed" />}
                        label="Smoking Allowed"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={listing.roommatePreferences.drinkingAllowed} onChange={handleCheckboxChange} name="drinkingAllowed" />}
                        label="Drinking Allowed"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={listing.roommatePreferences.veganFriendly} onChange={handleCheckboxChange} name="veganFriendly" />}
                        label="Vegan Friendly"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={listing.roommatePreferences.petsAllowed} onChange={handleCheckboxChange} name="petsAllowed" />}
                        label="Pets Allowed"
                    />
                </FormGroup>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="gender-label">Preferred Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        name="gender"
                        value={listing.roommatePreferences.gender}
                        onChange={handleInputChange}
                        label="Preferred Gender"
                    >
                        <MenuItem value="Any">Any</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" fullWidth margin="normal">
                    Add Listing
                </Button>
            </form>
        </Box>
    );
};

export default AddListing;