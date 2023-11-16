import React, { useState, useEffect } from 'react';
import { getCustomListings } from '../services/CustomListingsAPI';
import { Link } from 'react-router-dom';
import { LineStyle } from '@mui/icons-material';

const ViewListings = () => {
  const [apartmentsData, setApartmentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCustomListings();
        console.log("apaprj", data);
        setApartmentsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {apartmentsData.map((data) => (
        <div key={data.id} className="flex gap-8 m-10 bg-slate-100  max-w-4xl shadow-sm rounded-lg">
          <div >
            <img src={data.image} className="w-48 rounded-l-lg" />
          </div>

          <div className="p-6   flex-1" >
            <h1 className=" text-xl mb-2 font-bold"> {data.name}</h1>
            <h2 className="text-slate-200 text-sm mb-2 font-normal">{data.description}</h2>
            <div className="grid grid-cols-2 gap 2 text-sm font-medium mb-2">
              <div>{data.bedrooms} Bedrooms</div>
              <div>{data.bathrooms} Bathrooms</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">${data.price}</span>
              <span>
                <Link to={`/listings/${data.id}`}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-500 hover:text-white">
                  Click me
                  </button>
                </Link>

              </span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewListings;
