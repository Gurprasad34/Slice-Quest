import { useState, useEffect } from 'react'; 
import SavedPizzaList from '../components/SavedPizzaList';
import { getSavedPizzaShops } from '../utils/api';

const UserProfile = () => {
    const [savedPizzaShops, setSavedPizzaShops] = useState<any[]>([]);


    useEffect(() => {
        // Fetch saved pizza shops from the user's profile (API call or local storage)
        const fetchSavedPizzaShops = async () => {
            try {
                // You can call the API here if it's relevant
                const shops = await getSavedPizzaShops();
                setSavedPizzaShops(shops);
            } catch (error) {
                console.error('Failed to fetch saved pizza shops:', error);
            }
        };

        // Call the fetch function
        fetchSavedPizzaShops();
    }, []); // This will run once when the component mounts

    return (
        <div>
            <h1>Your Profile</h1>
            <SavedPizzaList pizzaShops={savedPizzaShops} />
        </div>
    );
};

export default UserProfile;