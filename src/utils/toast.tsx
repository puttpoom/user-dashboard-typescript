import { toast } from "react-toastify";

export function TostError(errorMessage: string) {
  toast.error(`${errorMessage}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
