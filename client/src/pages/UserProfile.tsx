import React, { useState, useEffect } from 'react'; 
import SavedPizzaList from '../components/SavedPizzaList';
import { getSavedPizzaShops } from '../utils/api';

const UserProfile = () => {
    const [savedPizzaShops, setSavedPizzaShops]= useState<any[]>([]);

 useEffect(() => {
    // Fetch saved pizza shops from the user's profile (API call or local storage)
    setSavedPizzaShops([
      { id: 1, name: 'Krispy Pizza', location: 'NYC, 1st Ave' },
      { id: 2, name: 'Prince Street Pizza', location: 'NYC, 2nd Ave' },
    ]);
  }, []);
  
    useEffect(() => {
        const fetchSavedPizzaShops = async () => {
          try {
            const shops = await getSavedPizzaShops();
            setSavedPizzaShops(shops);
          } catch (error) {
            console.error('Failed to fetch saved pizza shops:', error);
          }
        };
    
        fetchSavedPizzaShops();
      }, []);
    
      return (
        <div>
          <h1>Your Profile</h1>
          <SavedPizzaList pizzaShops={savedPizzaShops} />
        </div>
      );
    };
    
    export default UserProfile;