import React from 'react';
import TableRow from './TableRow';
import TableItem from './TableItem';
import AddButton from './AddButton';

function StockAlert(actual_value,average_value) {
    switch (true){
        case (actual_value < (average_value * 10)):
            return "danger";
        case (actual_value >= (average_value * 10)) && (actual_value <= (average_value * 13)):
            return "warning";
        case (actual_value >= (average_value * 14)) && (actual_value <= (average_value * 18)):
            return "success";
        case (actual_value >= (average_value * 19)) && (actual_value <= (average_value * 23)):
            return "warning";
        case (actual_value > (average_value * 23)):
            return "danger";
        case average_value === 0:
            return "success";
        default:
            return "light";     
    }
}


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
                        <TableItem value={<AddButton alertClass={StockAlert(cdd.value,cdd.average)} />} />
                    </TableRow>    
                    ))}
            </tbody>
        );
    }
}

export default Stocks;