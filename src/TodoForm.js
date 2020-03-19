import React from 'react';

class ListForm extends React.Component{

    render(){
        return(
            <div className="ListForm">
                <form onSubmit={this.props.addItem}>
                    <input 
                    placeholder="What to do ?"
                    value={this.props.currentItem}
                    onChange={(e)=>this.props.handlChangedValue(e.target.value)} />
                    <button type="submit"  >Add Item</button>
                </form>
            </div>
        );
    }
}
export default ListForm