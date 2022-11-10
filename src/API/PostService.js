import axios from "axios";

export default class PostSevice {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
      params:{
        _limit: limit,
        _page: page,
      }
    });
    return response;
  }

  static async getPostByUserId(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    return response;
  }

  static async getCommentsByPostId(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response;
  }

  static async getPhotosByUserId(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    return response;
  }

  static async getUsers() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response;
  }
}
