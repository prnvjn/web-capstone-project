import React, { useState,  } from 'react';

const ProfileCreation = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        smoking: false,
        vegan: false,
        drinking: false,
        pets: false
    });



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProfile({ 
            ...profile, 
            [name]: type === 'checkbox' ? checked : value 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send 'profile' to your backend service
        console.log(profile);
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name, Email, Age, Gender fields here... */}
                <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>


                <label className="block">
                    <input
                        type="checkbox"
                        name="smoking"
                        checked={profile.smoking}
                        onChange={handleChange}
                    />
                    Smoking
                </label>

                <label className="block">
                    <input
                        type="checkbox"
                        name="vegan"
                        checked={profile.vegan}
                        onChange={handleChange}
                    />
                    Vegan
                </label>

                <label className="block">
                    <input
                        type="checkbox"
                        name="drinking"
                        checked={profile.drinking}
                        onChange={handleChange}
                    />
                    Drinking
                </label>

                <label className="block">
                    <input
                        type="checkbox"
                        name="pets"
                        checked={profile.pets}
                        onChange={handleChange}
                    />
                    Pets
                </label>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded"
                >
                    Create Profile
                </button>
            </form>
        </div>
    );
};

export default ProfileCreation;
