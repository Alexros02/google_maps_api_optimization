import React, { useState, useEffect } from "react";
import SweetAlert from "../SweetAlert/SweetAlert";
import { getPosts } from "../../Services/PostsService";

const Home = () => {
    const [locations, setLocations] = useState([]);

    const fetchPosts = async () => {
        try {
            const posts = await getPosts();
            setLocations(posts);
        } catch (error) {
            console.error("Error al obtener posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <div className="w-full flex justify-center my-2 flex-wrap">
                {locations.map((location) => (
                    <div key={location.id} className="card bg-base-100 w-96 shadow-xl m-2">
                        <div className="card-body">
                            <h2 className="card-title">{location.direccion}</h2>
                            <p><strong>Ubicación:</strong> {location.ubicacion.lat}, {location.ubicacion.lng}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SweetAlert title="Agregar Ubicación" onPostAdded={fetchPosts} />
        </>
    );
};

export default Home;