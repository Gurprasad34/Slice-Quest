interface FavoriteButtonProps {
  shopId: number;
}

const FavoriteButton = ({ shopId }: FavoriteButtonProps) => {
  const handleClick = () => {
    // pretty much the logic is to save the pizza shop to the user's profile (e.g., API call or local storage)-saif
    console.log(`Pizza shop with ID ${shopId} saved to profile.`);
  };

  return <button onClick={handleClick}>Save to Profile</button>;
};

export default FavoriteButton;
