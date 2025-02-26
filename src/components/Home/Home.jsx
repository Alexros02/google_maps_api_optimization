import React, { useState } from "react";
import SweetAlert from "../SweetAlert/SweetAlert";

const Home = () => {
    const [cards, setCards] = useState([]);

    const handleOpenModal = (data) => {
        console.log('Datos del formulario:', data);
        setCards([...cards, data]);
    };

    return (
        <>
            <div className={"w-full flex justify-center my-2 flex-wrap"}>
                {cards.map((card, index) => (
                    <div key={index} className="card bg-base-100 w-96 shadow-xl m-2">
                        <div className="card-body">
                            <h2 className="card-title">{card.nombre}</h2>
                            <p>{card.mensaje}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Contact {card.email}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <SweetAlert className="addButton" title="Formulario" onConfirm={handleOpenModal} />
        </>
    );
};

export default Home;