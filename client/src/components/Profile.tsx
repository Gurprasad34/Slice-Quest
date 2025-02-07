import React, { useState, useEffect } from 'react';
import SavedPizzaList from '../components/SavedPizzaList';

const Profile = () => {
  const [savedPizzaShops, setSavedPizzaShops] = useState<any[]>([]);

  useEffect(() => {
    // Fetch saved pizza shops from the user's profile (API call or local storage)
    setSavedPizzaShops([
      { id: 1, name: 'Krispy Pizza', location: 'NYC, 1st Ave' },
      { id: 2, name: 'Prince Street Pizza', location: 'NYC, 2nd Ave' },
    ]);
  }, []);

  return (
    <div>
      <h1>Your Profile</h1>
      <SavedPizzaList pizzaShops={savedPizzaShops} />
    </div>
  );
};

export default Profile;
