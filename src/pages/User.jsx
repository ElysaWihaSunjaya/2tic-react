import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function User() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://dummyjson.com/users")
            .then((response) => {
                // Assuming the users array is inside response.data
                if (response.status === 200) {
                    setUsers(response.data.users);
                }
            })
            .catch((err) => {
                if (err.response) {
                    setError(err.response.data.message || "An error occurred");
                } else {
                    setError(err.message || "An unknown error occurred");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const loadingInfo = loading ? (
        <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
            <AiOutlineLoading3Quarters className="me-2 animate-spin" />
            Mohon Tunggu...
        </div>
    ) : null;

    const errorInfo = error ? (
        <div className="bg-red-200 p-5 text-sm rounded text-red-600">
            Error: {error}
        </div>
    ) : null;

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Users 👋
            </h2>
            {loadingInfo}
            {errorInfo}

            {users.map((user, index) => (
                <div key={index} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <img src={user.image} alt="User Image" className="w-32 h-32 object-cover rounded-full" />
                    <p className="text-gray-600">ID: {user.id}</p>
                    <p className="text-gray-600">First Name: {user.firstName}, Last Name: {user.lastName}</p>
                    <p className="text-gray-600">Maiden Name: {user.maidenName}</p>
                    <p className="text-gray-600">Age: {user.age}</p>
                    <p className="text-gray-600">Gender: {user.gender}</p>
                    <p className="text-gray-600">Email: {user.email}</p>
                    <p className="text-gray-600">Phone: {user.phone}</p>
                    <p className="text-gray-600">Username: {user.username}</p>
                    <p className="text-gray-600">Password: {user.password}</p>
                    <p className="text-gray-600">Birth Date: {user.birthDate}</p>
                    <p className="text-gray-600">Blood Group: {user.bloodGroup}</p>
                    <p className="text-gray-600">Height: {user.height}, Weight: {user.weight}</p>
                    <p className="text-gray-600">Eye Color: {user.eyeColor}, Hair Color: {user.hair.color}, Hair Type: {user.hair.type}</p>
                    <p className="text-gray-600">IP: {user.ip}</p>
                    <p className="text-gray-600">Address: {user.address.address}, {user.address.city}, {user.address.state}, {user.address.stateCode}, {user.address.postalCode}</p>
                    <p className="text-gray-600">Coordinates: {user.address.coordinates.lat}, {user.address.coordinates.lng}</p>
                    <p className="text-gray-600">Country: {user.address.country}</p>
                    <p className="text-gray-600">MAC Address: {user.macAddress}</p>
                    <p className="text-gray-600">University: {user.university}</p>
                    <p className="text-gray-600">Bank Card Expiry: {user.bank.cardExpire}, {user.bank.cardNumber}, {user.bank.cardType}, {user.bank.currency}, {user.bank.iban}</p>
                    <p className="text-gray-600">Company Department: {user.company.department}, {user.company.name}, {user.company.title}</p>
                    <p className="text-gray-600">Company Address: {user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.stateCode}, 
                        {user.company.address.postalCode}</p>
                    <p className="text-gray-600">Company Coordinates: {user.company.address.coordinates.lat}, {user.company.address.coordinates.lng}</p>
                    <p className="text-gray-600">Company Country: {user.company.address.country}</p>
                    <p className="text-gray-600">EIN: {user.ein}</p>
                    <p className="text-gray-600">SSN: {user.ssn}</p>
                    <p className="text-gray-600">User Agent: {user.userAgent}</p>
                    <p className="text-gray-600">Crypto Coin: {user.crypto.coin}, Crypto Wallet: {user.crypto.wallet}, Crypto Network: {user.crypto.network}</p>
                    <p className="text-gray-600">Role: {user.role}</p>
                </div>
            ))}
        </div>
    );
}
