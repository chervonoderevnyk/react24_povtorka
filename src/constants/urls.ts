const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        byId: (id: number): string => urls.users.base + '/' + id
    },

    posts: {
        base: '/posts',
        byId: (userId: number): string =>  urls.posts.base + '?userId=' + userId
    }
}

export {baseUrl, urls}