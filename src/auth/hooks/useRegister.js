import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

export const useRegister = () => {
	const { httpServices } = useContext(AuthContext);
	const register = async (username, email, password) => {
		try {
			await httpServices.register(username, email, password);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};
	return { register };
};
