import React from 'react';
import { Row, Col} from "antd";

class ListItems extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li>
                        <Row> 
                            <Col span={18}>
                            {item}
                            </Col>
                            <Col span={6}>
                                <button onClick={e=>this.props.deleteItem(item)} >delete Item</button>
                            </Col>
                        </Row>
                    </li>
                ))}
            </ul>
        );
    }
}
export default ListItems;