import http from "../http-common";

class dataService {
  getAll() {
    return http.get("/workouts");
  }

  get(id) {
    return http.get(`/workouts/${id}`);
  }

  create(data) {
    return http.post("/workouts", data);
  }

  update(id, data) {
    return http.put(`/workouts/${id}`, data);
  }

  delete(id) {
    return http.delete(`/workouts/${id}`);
  }

  deleteAll() {
    return http.delete(`/workouts`);
  }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new dataService();