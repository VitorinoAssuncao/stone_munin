import React from 'react';
import TableRow from './TableRow';
import TableItem from './TableItem';
import ModalRequest from './Modal';

class Stocks extends React.Component{
    state = {
        cdds: []
    };

    componentDidMount(){
        fetch('https://cddcontroller.herokuapp.com/stocks')
        .then(res => res.json())
        .then(res => {
            this.setState({
                cdds : res
            });
        });
    }

    render() {
        return (
            <tbody>
                {this.state.cdds.map(cdd => (
                    <TableRow rowValue={cdd.id}>
                        <TableItem value={cdd.base} />
                        <TableItem value={cdd.value} />
                        <TableItem value={cdd.average} />
                        <TableItem value={
                            <ModalRequest cdds_callback={this.setState()} cdd_id={cdd.id} value={cdd.value} average={cdd.average} cdd={cdd.base}/>} />  
                    </TableRow>    
                    ))}
            </tbody>
        );
    }
}

export default Stocks;