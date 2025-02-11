const retrieveShops = async () => {
    try {
        const response = await fetch('/api/pizza/pizza-shops', {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to retrieve pizza shops: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (err) {
        console.log('Error fetching pizza shops:', err);
        return Promise.reject('Could not fetch pizza shops');
    }
};

const retrieveTypes = async () => {
    try {
        const response = await fetch('/api/pizza/pizza-types', {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to retrieve pizza types, check network tab!');
        }

        return await response.json();
    } catch (err) {
        console.log('Error fetching pizza types:', err);
        return Promise.reject('Could not fetch pizza types');
    }
};

export { retrieveShops, retrieveTypes };