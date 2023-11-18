const apartmentsData = 
[   
      {
        "id": 1,
        "user_id" : 1,
        "name": "Cozy Downtown Loft",
        "address": "123 Main St, Cityville",
        "price": 1500,
        "bedrooms": 2,
        "bathrooms": 1,
        "amenities": ["Wi-Fi", "Parking", "Laundry"],
        "description": "A comfortable loft in the heart of the city, close to all major attractions.",
        "image": "https://placehold.co/400x400",
        "roommatePreferences": {
          "ageRange": [20, 35],
          "gender": "Any",
          "smokingAllowed": false,
          "drinkingAllowed": true,
          "veganFriendly": false,
          "petsAllowed": false
        }
      },
      {
        "id": 2,
        "user_id" : 1,
        "name": "Spacious Suburban Home",
        "address": "456 Oak Ave, Suburbia",
        "price": 2000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["Backyard", "Garage", "Pet-friendly"],
        "description": "A spacious home in a quiet suburban neighborhood with a lovely backyard.",
        "image": "https://placehold.co/400x400",
        "roommatePreferences": {
          "ageRange": [25, 40],
          "gender": "Female",
          "smokingAllowed": false,
          "drinkingAllowed": true,
          "veganFriendly": true,
          "petsAllowed": true
        }
      },
      {
        "id": 3,
        "user_id" : 1,
        "name": "Modern City Apartment",
        "address": "789 High St, Metropolis",
        "price": 1800,
        "bedrooms": 1,
        "bathrooms": 1,
        "amenities": ["Gym", "Security", "Balcony"],
        "description": "A sleek and modern apartment with great city views and access to a fitness center.",
        "image": "https://placehold.co/400x400",
        "roommatePreferences": {
          "ageRange": [22, 35],
          "gender": "Any",
          "smokingAllowed": true,
          "drinkingAllowed": true,
          "veganFriendly": false,
          "petsAllowed": false
        }
      },
      // Add more listings as needed
      {
        "id": 4,
        "user_id" : 3,
        "name": "Quaint Countryside Cottage",
        "address": "987 Rural Rd, Countryside",
        "price": 1200,
        "bedrooms": 2,
        "bathrooms": 1,
        "amenities": ["Garden", "Fireplace", "Pet-friendly"],
        "description": "A charming cottage surrounded by nature, perfect for a peaceful living experience.",
        "image": "https://placehold.co/400x400",
        "roommatePreferences": {
          "ageRange": [30, 50],
          "gender": "Any",
          "smokingAllowed": false,
          "drinkingAllowed": false,
          "veganFriendly": true,
          "petsAllowed": true
        }
      },
      // Add more listings as needed
      {
        "id": 5,
       "user_id" : 3,
        "name": "Sunny Beachfront Condo",
        "address": "456 Ocean Blvd, Beach City",
        "price": 2500,
        "bedrooms": 2,
        "bathrooms": 2,
        "amenities": ["Beach Access", "Pool", "Fitness Center"],
        "description": "A modern condo with stunning ocean views, steps away from the beach.",
        "image": "https://placehold.co/400x400",
        "roommatePreferences": {
          "ageRange": [25, 40],
          "gender": "Male",
          "smokingAllowed": false,
          "drinkingAllowed": true,
          "veganFriendly": false,
          "petsAllowed": false
        }
      },
      {
        "id": 6,
        "user_id" : 2,
        "name": "Arbor Oaks",
        "address": "Greek Row Dr",
        "price": 1200,
        "bedrooms": 1,
        "bathrooms": 1,
        "amenities": ["WI-FI", "Fireplace", "Pet-friendly"],
        "description": "On campus housing with all the utilities included",
        "image": "https://placehold.co/400x400",
        "roommatePreferences": {
          "ageRange": [30, 50],
          "gender": "Any",
          "smokingAllowed": true,
          "drinkingAllowed": true,
          "veganFriendly": false,
          "petsAllowed": true
        }
      },
      {
        "id": 7,
        "user_id" : 3,
        "name": "University Village",
        "address": "Greek Row Dr",
        "price": 1200,
        "bedrooms": 1,
        "bathrooms": 1,
        "amenities": ["WI-FI", "Fireplace", "Pet-friendly"],
        "description": "On campus housing with all the utilities included",
        "image": "https://placehold.co/400x400",
        "roommatePreferences": {
          "ageRange": [30, 50],
          "gender": "Any",
          "smokingAllowed": true,
          "drinkingAllowed": true,
          "veganFriendly": false,
          "petsAllowed": true
        }
      },
   ]
  ;
  
  // Export the data for use in other parts of your application
  export  {apartmentsData};
  