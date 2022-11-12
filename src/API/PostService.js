import axios from "axios";

export default class PostSevice {
  static async getPostByUserId(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
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
