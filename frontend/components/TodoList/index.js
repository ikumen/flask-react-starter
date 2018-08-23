import React from 'react';
import styled from "styled-components";

/* Wrapper for input and checkbox */
const Item = styled.div`
`;

const ItemDescription = styled.input.attrs({
    name: 'description'
})`

`;

const ItemDone = styled.input.attrs({
    type: 'checkbox',
    name: 'done'
})`
`;

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.onItemChange = this.onItemChange.bind(this)
        this.state = {
            items: []
        }
    }

    onItemChange(e) {
        const target = e.target;
        const items = this.state.items;
        Object.assign(items[target.id], {[target.name]: (target.type === 'checkbox' ? target.checked : target.value)});
        this.setState({items: items});
        //console.log('item: ', this.state.items[target.id])
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
            })
    }

    render() {
        return <div>
            {this.state.items.map((item, i) => 
                <Item key={i}>
                    <ItemDescription id={i} value={item.description} onChange={this.onItemChange} />
                    <ItemDone id={i} checked={item.done} onChange={this.onItemChange} />
                </Item>
            )}
        </div>;
    }
}

export default TodoList;
