import { useState, useEffect } from "react";
// import { retrieveUsers } from "../api/userAPI";
import { retrieveShops } from "../api/pizzaAPI";
// import type { UserData } from "../interfaces/UserData";
import ErrorPage from "./ErrorPage";
// import UserList from '../components/Users';
import PizzaShopList from '../components/PizzaShops';
// import auth from '../utils/auth';

const Shops = () => {

    const [shops, setShops] = useState<any[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const data = await retrieveShops();
                setShops(data);
            } catch (err) {
                console.error('Failed to retrieve shops:', err);
                setError(true);
            }
        };

        fetchShops();
    }, []);

    if (error) {
        return <ErrorPage />;
    }

        return (
            <>
                <PizzaShopList shops={shops} />
            </>
    );
};

export default Shops;