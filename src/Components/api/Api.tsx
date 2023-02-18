import axios from "axios";

const endPoint = "http://localhost:4573";

interface userData {
    name: string;
    email: string;
    password: string;
}

export const createUser = async ({ name, email, password} : userData) => {
        return await axios.post(`${endPoint}/api/register`, {
        name,
        email,
        password
    }).then((res) => res.data);
}