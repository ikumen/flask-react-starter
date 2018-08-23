from flask import Flask, request, jsonify

app = Flask(__name__,
            static_folder='../dist',
            static_url_path='/static')

# simple in-memory list
todo_list = []

@app.route('/')
def serve_page():
    """Default route.
    """
    return app.send_static_file('index.html')


@app.route('/api/todos', methods=['get'])
def api_list():
    """Return list of todos.
    """
    return jsonify(todo_list)


@app.route('/api/todos/<int:id>', methods=['get'])
def api_get(id):
    """Return todo item with given id.
    """
    try:
        return jsonify(todo_list[id])
    except IndexError:
        return _handle_404()


@app.route('/api/todos', methods=['post'])
@app.route('/api/todos/<int:id>', methods=['put'])
def api_put(id=None):
    """Update or create todo item.
    """
    item = request.get_json()
    try:
        if id:
            todo_list[id].update(item)
            return id
        else:
            todo_list.append(item)
            id = len(todo_list)-1
        return jsonify({'id': id})

    except IndexError:
        return _handle_404()
    

@app.route('/api/todos/<int:i>/<int:j>')
def api_swap(i, j):
    try:
        item = todo_list[i]
        todo_list[i] = todo_list[j]
        todo_list[j] = item
        return jsonify([i,j])

    except IndexError:
        return _handle_404()


@app.route('/api/todos/<int:id>', methods=['delete'])
def api_delete(id):
    """Removes the item with given id.
    """
    try:
        todo_list.pop(id)
    except IndexError:
        return _handle_404()


def _handle_404():
    """Let's handle non-existent todo item.
    """
    resp = jsonify({'msg': 'Unable to find item in list'})
    resp.status = 404
    return resp


if __name__ == '__main__':
    app.run(debug=True, port=5000)