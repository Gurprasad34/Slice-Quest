const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const retrieveShops = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/pizza/pizza-shops`, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error(`Failed to retrieve pizza shops: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (err) {
        console.error('Error fetching pizza shops:', err);
        return Promise.reject('Could not fetch pizza shops');
    }
};

const retrieveTypes = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/pizza/pizza-types`, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Failed to retrieve pizza types, check network tab!');
        }

        return await response.json();
    } catch (err) {
        console.error('Error fetching pizza types:', err);
        return Promise.reject('Could not fetch pizza types');
    }
};

export { retrieveShops, retrieveTypes };
