import axios from "axios";
import {toast} from "react-toastify";
import {SIGN_UP_URL} from '../constants/apiEndpoints';
import setAxiosConfig from "../helpers/setAxiosConfig";


async function signUpApi(name, email, password, repPassword) {
    if (!email || !password || !name) {
        toast.error("One or more field(s) is/are blank");
        return false;
    }

    if (repPassword !== password ) {
        toast.error("🔐 Password not equal")
        return false;
    }

    let body = {
        'name': name,
        'email': email,
        'password': password
    };
    let config = setAxiosConfig('POST', SIGN_UP_URL, true);

    config['data'] = body;
    return await axios(config).then((response) => {

        if (response.status === 201) {
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

export default signUpApi;