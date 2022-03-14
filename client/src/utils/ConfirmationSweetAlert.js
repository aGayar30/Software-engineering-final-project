import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
const CustomSwal = withReactContent(Swal);

const ConfirmationSweetAlert = async (options) => {
    const result = await CustomSwal.fire({
        title: options.title || "Are you sure?",
        showCancelButton: options.showCancelButton || true,
        confirmButtonText: options.confirmButtonText || `Confirm `,
        cancelButtonText: options.cancelButtonText || 'Cancel',
    })

    if (result.isConfirmed) {
        if (options.onConfirm)
            options.onConfirm();
    }
    else if (result.isDenied) {
        if (options.onDeny)
            options.onDeny();
    }
}

export default ConfirmationSweetAlert;
