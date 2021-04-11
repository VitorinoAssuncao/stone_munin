import React, {useState} from "react";
import {Button, Modal,ModalHeader, ModalBody} from 'reactstrap';
import AddForm from './AddForm';

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

const ModalRequest = (props) => {
    const {
      cdd_id,
      cdd,
      value,
      average,
      className,
      cdds_callback
    } = props;
  
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
      <div>
        <Button className='fas fa-plus-circle' color={StockAlert(value,average)} onClick={toggle} />
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Digite abaixo o valor do novo estoque:</ModalHeader>
          <ModalBody>
            <AddForm cdds_callback={cdds_callback} id={cdd_id} base={cdd} average={average}/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
  
  export default ModalRequest;