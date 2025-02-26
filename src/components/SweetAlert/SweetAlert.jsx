import Swal from 'sweetalert2';

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

const SweetAlert = ({ title, onConfirm, type }) => {
    const show = () => {
        Swal.fire({
            title: title,
            html: `
        <div class="form-control w-full max-w-xs ">
          <label class="label">
            <span class="label-text">Nombre</span>
          </label>
          <input type="text" id="nombre" placeholder="Tu nombre"  class="input input-bordered w-full max-w-xs swal2-cancel " />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" id="email" placeholder="Tu email" class="input input-bordered w-full max-w-xs " />
        </div>
          <label class="label">
            <span class="label-text">Mensaje</span>
          </label>
          <textarea id="mensaje" placeholder="Tu mensaje" class="textarea textarea-bordered w-full max-w-xs "></textarea>
        </div>
      `,
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            cancelButtonText: 'Cancelar',
            customClass: {
                popup: 'swal2-custom',
                confirmButton: 'swal2-confirm',
                cancelButton: 'swal2-cancel',
            },
            preConfirm: () => {
                const nombre = Swal.getPopup().querySelector('#nombre').value;
                const email = Swal.getPopup().querySelector('#email').value;
                const mensaje = Swal.getPopup().querySelector('#mensaje').value;

                if (!nombre || !email || !mensaje) {
                    Swal.showValidationMessage('Por favor, completa todos los campos');
                    return null;
                }

                return { nombre, email, mensaje };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                onConfirm(result.value);
            }
        });
    };

    return (
        <div className="w-full flex justify-end">
            <button className="btn btn-primary rounded-full m-4" onClick={show}>+</button>
        </div>
    );
};

export default SweetAlert;