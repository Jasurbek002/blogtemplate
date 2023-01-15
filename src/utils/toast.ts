import { toast } from "react-hot-toast";

const success = (message: string) => {
    return toast.success(message, {
        position: "bottom-center",
        duration: 3000,
    });
}

const error = (message: string) => {
    return toast.error(message, {
        position: "bottom-center",
        duration: 3000,
    });
}

export { success, error }