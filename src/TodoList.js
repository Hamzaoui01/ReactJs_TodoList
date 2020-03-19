import React from 'react';
import ListForm from './TodoForm.js'
import ListItems from './TodoListView.js';
import { Row, Col} from "antd";

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
          items: [],
          currentItem: {text:'', key:0},
        }
      }

    addItem = (e)=>{
        e.preventDefault()
        if(this.state.currentItem.text == '')return;
        
        const items = [...this.state.items,this.state.currentItem]
        this.setState({
            currentItem : {text :'',key : items.length},
            items:items
        })
    }

    deleteItem = (e)=>{
        console.log("deleting"+e);
        var items = [...this.state.items];
        var index = items.indexOf(e);
        if(index != -1) items.splice(index,1);
        this.setState({        
            items :items
        })
        
    }

    handlChangedValue = (value)=>{
        const a={text:value,key:Math.random()}
        this.setState({
            currentItem:value
        })
    }

    render() {
        return (
            <div>
            <Row >
       
            <Col span={6}>
            <ListForm  
                            currentItem={this.state.currentItem.text}
                            addItem={this.addItem}
                            handlChangedValue={this.handlChangedValue}
                />
            </Col>
          
            <Col span={8}>
            <ListItems 
                items ={this.state.items} 
                deleteItem ={this.deleteItem}
            />
            </Col>
            </Row>        
            </div>
            );
    }
}

export default TodoList