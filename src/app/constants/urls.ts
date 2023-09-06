import {environment} from "../../environments/environment";

const {JPH_API, CAR_API} = environment;
const users = `${JPH_API}/users`;
const cars = `${CAR_API}/cars`;

const urls = {
    users: {
        base: users,
        byId: (id: number): string => `${users}/${id}`
    },
    cars: {
        base: cars,
        buId: (id: number): string => `${cars}/${id}`
    }
};

export {
    urls
};
