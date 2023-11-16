import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, InputLabel, FormControl, Chip, OutlinedInput, Box } from '@mui/material';
import { getListingbyId, updateListing } from '../services/CustomListingsAPI';

const EditListing = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [listing, setListing] = useState({
        name: '',
        address: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        amenities: [],
        description: '',
        image: '',
        gender: 'Any',
        smokingAllowed: false,
        drinkingAllowed: false,
        veganFriendly: false,
        petsAllowed: false
    });

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const data = await getListingbyId(id);
                setListing({ ...data[0], 
                    gender: data[0].gender, 
                    smokingAllowed: data[0].smoking_allowed, 
                    drinkingAllowed: data[0].drinking_allowed, 
                    veganFriendly: data[0].vegan_friendly, 
                    petsAllowed: data[0].pets_allowed });
            } catch (error) {
                console.error('Error fetching listing:', error);
            }
        };

        fetchListing();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setListing({ ...listing, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setListing({ ...listing, [name]: checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateListing(id, listing);
            navigate('/view-listings');
        } catch (error) {
            console.error('Error updating listing:', error);
        }
    };

    // ... Rest of your form and amenities code

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
                      onChange={handleInputChange}
                      input={<OutlinedInput id="select-multiple-chip" label="Amenities" />}
                      renderValue={(selected) => (
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {selected.map((value) => (
                                  <Chip key={value} label={value} />
                              ))}
                          </Box>
                      )}
                  >
                      {/* Insert your amenities options here */}
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
                        control={
                            <Checkbox
                                checked={listing.smokingAllowed}
                                onChange={handleCheckboxChange}
                                name="smokingAllowed"
                            />
                        }
                        label="Smoking Allowed"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={listing.drinkingAllowed}
                                onChange={handleCheckboxChange}
                                name="drinkingAllowed"
                            />
                        }
                        label="Drinking Allowed"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={listing.veganFriendly}
                                onChange={handleCheckboxChange}
                                name="veganFriendly"
                            />
                        }
                        label="Vegan Friendly"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={listing.petsAllowed}
                                onChange={handleCheckboxChange}
                                name="petsAllowed"
                            />
                        }
                        label="Pets Allowed"
                    />
                </FormGroup>


              <Button type="submit" variant="contained" color="primary" fullWidth margin="normal">
                  Update Listing
              </Button>
          </form>
      </Box>
  );
};

export default EditListing;
