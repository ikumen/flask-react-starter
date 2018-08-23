import React from 'react';
import Header from '../../components/Header';
import TodoList from '../../components/TodoList';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEvent(event) {
        // console.log('event', event)
        // console.log('event.type', event.type)
        // console.log('id', event.target.id)
    }

    render() {
        return (<div onClick={this.handleEvent.bind(this)}>
            <Header title="Todos"/>
            <TodoList />
        </div>);
    }
}

export default Homepage;