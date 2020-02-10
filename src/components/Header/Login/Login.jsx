import React from "react";
import Modal from "react-responsive-modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Login extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


   render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <h2>react-responsive-modal</h2>
        
        <button onClick={this.onOpenModal}>Open modal</button>
        
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Simple centered modal</h2>
          
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <div className="row">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <a className="create" style={{marginLeft:"20px"}} onClick={this.onOpenModal}>create Account</a>
                </div>
                
            </Form>
            
        </Modal>
      </div>
    );
  }
}


