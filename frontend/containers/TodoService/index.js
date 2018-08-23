import React from 'react';

class TodoService extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   async getTodoList() {
      let resp = await fetch('/api/todos');
      return await resp.json();
  }

  componentDidMount() {
      this.getTodoList()
         .then(items => {this.setState({items: items})})
         .catch(err => {
            console.log(err)
         });
  }

   render() {
      return <>{this.props.children}</>
   }
}