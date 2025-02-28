import Swal from 'sweetalert2';
import {Plus}from "lucide-react"
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../firebaseConfig";
import {addPost} from "../../Services/PostsService";

const customSwalStyles = `
.swal2-custom {
  background-color: #FAF3DD;
  color: #2C2C2E;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.swal2-custom .swal2-title {
  color: #2C3E50;
}

.swal2-custom .swal2-html-container {
  color: #2C2C2E;
}

.swal2-custom .swal2-confirm {
  background-color: #D4AF37;
  color: #2C2C2E;
}

.swal2-custom .swal2-cancel {
  background-color: #2C3E50;
  color: #FAF3DD;
}

.swal2-success .swal2-icon {
  border-color: #C1E1C1;
  color: #C1E1C1;
}

.swal2-error .swal2-icon {
  border-color: #F5D0C5;
  color: #F5D0C5;
}

.swal2-warning .swal2-icon {
  border-color: #FDE047;
  color: #FDE047;
}
`;

const style = document.createElement('style');
style.textContent = customSwalStyles;
document.head.appendChild(style);

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
                    <input type="number" id="lat" step="any" placeholder="Ej: 40.7128" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label"><span class="label-text">Longitud</span></label>
                    <input type="number" id="lng" step="any" placeholder="Ej: -74.0060" class="input input-bordered w-full max-w-xs" />
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
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