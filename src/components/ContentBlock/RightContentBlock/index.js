import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useForm, ValidationError } from '@formspree/react';

import * as S from "./styles";
import React from "react";
import image from "./LetsGetStartediPhone.png"

// = ({ title, content, button, icon, t, id }) => 
class RightBlock extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { value: '', banner: "Limited Spots Available" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({banner: "Thank you for signing up for the waitlist!"});
    alert("hi");
    // sendToFirebase() {
    //   alert("hi")
    // }
    event.preventDefault();
  }

  render() {
    return (
      <S.RightBlockContainer>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={11} md={11} sm={11} xs={24}>
            <Slide left>
              <S.ContentWrapper>
                <h6>{this.props.title}</h6>
                <S.Content>{this.props.content}</S.Content>
                <Row type="flex" justify="space-between" align="middle">
                  {this.state.banner}
                </Row>
                <br></br>
                <S.ButtonWrapper>
                <Row type="flex" justify="space-between" align="middle">
                  <ContactForm/>
                  {/* The below is written using material UI and would need to be hooked up to firebase */}
                  {/* <Col lg={11} md={11} sm={11} xs={24}>
                    <TextField id="outlined-basic" label="Your Email" variant="outlined" onChange={this.handleChange}/>
                  </Col>
                  <Col lg={11} md={11} sm={11} xs={24}>
                    <Button
                      color="primary"
                      variant="contained"
                      width="true"
                      size="medium"
                      disabled={this.state.value.length === 0}
                      onClick={this.handleSubmit}>
                      {this.props.button.title}
                    </Button>
                  </Col> */}
                </Row>
                </S.ButtonWrapper>
              </S.ContentWrapper>
            </Slide>
          </Col>
          <Col lg={13} md={13} sm={13} xs={24}>
            <Slide right>
              <Image
                src={image}
                preview={false}>
              </Image>
            </Slide>
          </Col>
        </Row>
      </S.RightBlockContainer>
    );
  }
};

function ContactForm() {
  const [state, handleSubmit] = useForm("xgerengl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Your Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      &nbsp;
      <button type="submit" disabled={state.submitting}>
        Count Me In!
      </button>
    </form>
  );
}

export default withTranslation()(RightBlock);
