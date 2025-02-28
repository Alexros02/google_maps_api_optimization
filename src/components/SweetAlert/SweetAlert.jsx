import React from 'react';
import Swal from 'sweetalert2';
import { Plus } from 'lucide-react';
import { addPost } from '../../Services/PostsService';
import './SweetAlert.css';

const SweetAlert = ({ title, onPostAdded }) => {
    const show = () => {
        Swal.fire({
            title: title,
            html: `
                <div class="form-control w-full max-w-xs">
                    <label class="label"><span class="label-text">Dirección</span></label>
                    <input type="text" id="direccion" placeholder="Ej: Calle 123, Ciudad" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label"><span class="label-text">Latitud</span></label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label"><span class="label-text">Longitud</span></label>
                    <input type="number" id="lng" step="any" placeholder="Ej: -74.0060" class="input input-bordered w-full max-w-xs" />
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            customClass: {
                popup: 'swal2-custom'
            },
            preConfirm: async () => {
                const direccion = Swal.getPopup().querySelector("#direccion").value;
                const lat = parseFloat(Swal.getPopup().querySelector("#lat").value.trim());
                const lng = parseFloat(Swal.getPopup().querySelector("#lng").value.trim());

                if (!direccion || isNaN(lat) || isNaN(lng)) {
                    Swal.showValidationMessage("Por favor, completa todos los campos correctamente.");
                    return null;
                }

                return { direccion, ubicacion: { lat, lng } };
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await addPost(result.value); // 🚀 Usa el servicio de Firestore
                    onPostAdded(); // Recarga la lista en Home
                } catch (error) {
                    console.error("Error al guardar el post:", error);
                }
            }
        });
    };

    return (
        <div className="fixed bottom-4 right-4">
            <button className="btn btn-primary rounded-full m-4 shadow-xl" style={{ width: "48px", height: "48px" }} onClick={show}>
                <Plus />
            </button>
        </div>
    );
};

export default SweetAlert;