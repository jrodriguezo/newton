import { fetchUser } from "../../../utils/localStorage/fetchUser";

export const initialState = {
    user: fetchUser(),
}


