import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        "Content-Type": "application/json: charset=UTF-8"
    }
});

let requests = {
      users: {
           getAllUsers : () => {
              return  axiosInstance.get('/users');
          }
      },

      posts: {
           getAllPosts: () => {
              return axiosInstance.get('/posts');
          }
      },

    postsUserId: {
          getAllPostsOfUser: (id: number) => {
              return axiosInstance.get('posts/user/' + id);
          }
    },

       // carts: {
       //    getAllCarts: () => {
       //        return axiosInstance.get('/carts');
       //    }
       // }

    cartUserId: {
          getCartOfUser: (id: number) => {
              return axiosInstance.get('/carts/user/' + id);
          }
    },

    commentsPostId: {
          getCommentsOfPost: (id: number) => {
              return axiosInstance.get('/comments/post/' + id);
          }
    }

}

export {requests}
