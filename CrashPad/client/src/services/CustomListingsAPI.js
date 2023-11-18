async function fetchWithErrorHandling(url, options) {
    console.log('fetching:', url, options);
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    if (response.status === 204) {  // No content, for DELETE requests
        return null;
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
}

export const getCustomListings = async () => {
    const url = '/api/listings';
    return await fetchWithErrorHandling(url);
}

export const getListingbyId = async (id) => {
    const url = `/api/listings/${id}`;
    return await fetchWithErrorHandling(url);
}

export const deleteItem = async (id) => {
    const url = `/api/listings/delete/${id}`;
    const options = {
        method: 'DELETE'
    };
    return await fetchWithErrorHandling(url, options);
};

export const createListing = async (listing) => {
    const url = '/api/listings/add-listing';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(listing),
    };
console.log(options)
    return await fetchWithErrorHandling(url, options);
    
}

export const updateListing = async (id, updatedData) => {
    const url = `/api/listings/edit-listing/${id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    };
    return await fetchWithErrorHandling(url, options);
};

