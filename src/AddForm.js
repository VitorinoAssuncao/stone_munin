import React from 'react';
import {Input,Button,Label,Form} from 'reactstrap'

class AddForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.state = {id:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event,id,cdds_callback) {
        const requestOptions = {
            method : 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({value:this.state.value})
        }
      event.preventDefault();
        console.log(`https://cddcontroller.herokuapp.com/stocks/${id}`)
        console.log(requestOptions)
     fetch(`https://cddcontroller.herokuapp.com/stocks/${id}`, requestOptions)
     .then(res => res.json())
     .then(window.location.reload());
}
  
    render() {
      return (
        <Form onSubmit={(e) => this.handleSubmit(e,this.props.id,this.props.cdds_callback)}>
          <Label>
            CDD {this.props.base} (Cód. {this.props.id})
          </Label><br />
          <Input type="text" value={this.state.value} onChange={this.handleChange} placeholder={`Estoque ideal máximo: ${this.props.average * 18}`}/>
          <Button color='success' className='m-2' type="submit">Enviar</Button>
        </Form>
      );
    }
  }

  export default AddForm;