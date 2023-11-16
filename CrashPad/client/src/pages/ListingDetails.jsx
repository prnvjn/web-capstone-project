import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getListingbyId, deleteItem} from '../services/CustomListingsAPI';

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleDelete = async () => {  // Updated this function
    try {
        window.location.href = '/view-listings';
        await deleteItem(id);
    } catch (error) {
        console.error('Error deleting item:', error);
    }
};

  const handleEdit = () => {
    navigate(`/edit-listing/${id}`); // Navigate to the edit listing page
  };

  if (!data) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-6 md:px-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-auto md:h-96 object-cover" src={data[0].image} alt={data[0].name} />
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{data[0].name}</h1>
            <p className="text-gray-700 text-lg mb-6">{data[0].description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-gray-600 text-lg font-semibold">Bedrooms:</span>
                <span className="ml-2 text-lg text-gray-700">{data[0].bedrooms}</span>
              </div>
              <div>
                <span className="text-gray-600 text-lg font-semibold">Bathrooms:</span>
                <span className="ml-2 text-lg text-gray-700">{data[0].bathrooms}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-blue-600">${data[0].price}</span>
              <div>
                <button onClick={handleEdit} className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 transition duration-300 hover:bg-green-600">
                  Edit
                </button>
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
