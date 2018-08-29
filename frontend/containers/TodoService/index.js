
class TodoService {

    async getTodoList() {
      let resp = await fetch('/api/todos');
      return await resp.json();
  }

}

export default new TodoService();