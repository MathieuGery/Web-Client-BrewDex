import axios from "axios";
import {toast} from "react-toastify";
import {SIGN_IN_URL} from '../constants/apiEndpoints';
import setAxiosConfig from "../helpers/setAxiosConfig";
import {storeUser} from "../tools/Auth";


async function signInApi(email, password) {
    if (!email || !password) {
        toast.error("One or more field(s) is/are blank");
        return false;
    }

    let body = {
        'email': email,
        'password': password
    };
    let config = setAxiosConfig('POST', SIGN_IN_URL, true);

    config['data'] = body;
    return await axios(config).then((response) => {

        if (response.status === 200) {
            storeUser(response.data.token);
            return true;
        } else {
            console.log(response)
            return false
        }
    }).catch((error) => {
        if (error.response) {
            toast.error(error.response.data.errors.errors[0].messages[0]);
            return false;
        }
        return true;
    });
}

export default signInApi;