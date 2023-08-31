const baseURL = 'https://jsonplaceholder.typicode.com';

const users = `${baseURL}/users`;
const posts = `${baseURL}/posts`;

const urls = {
    base: users,
    byId: (id: number): string=> `${posts}/${id}`
};

export {
    urls
}
