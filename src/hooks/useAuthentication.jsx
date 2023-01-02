import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/user/userSlice";
import googleAuth from "../utils/googleAuth";

function useAuthentication() {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const userDetails = await googleAuth();
    const { user } = userDetails;
    const { providerData } = user;
    dispatch(setUser(providerData[0]));
    localStorage.setItem("user", JSON.stringify(providerData[0]));
  };

  const handleLogout = () => {
    dispatch(setUser(null)); 
    localStorage.removeItem("user");
  };

  return { handleLogin, handleLogout } 
}

export default useAuthentication;
