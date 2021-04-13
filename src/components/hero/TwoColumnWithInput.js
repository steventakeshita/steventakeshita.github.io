import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import firebase from "firebase/app";
import "firebase/storage"
import "firebase/auth";
import "firebase/database";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/LetsGetStartediPhone.png";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-5 md:py-5`;
const LeftColumn = tw.div`relative justify-center max-w-screen-md lg:w-1/2 text-left mx-auto`;
const RightColumn = tw.div`relative mt-12 lg:w-1/2 lg:mt-0 flex-1 flex flex-col justify-center`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Subheading = tw.p`my-5 lg:my-8 text-base xl:text-lg`;
const SignupText = tw.p`my-3 text-gray-500 text-base`;
const ErrorText = tw.p`my-3 text-red-500 text-base`;

const Actions = styled.div`
  ${tw`relative max-w-md lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-4 py-4 sm:py-5 rounded-md border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full disabled:bg-primary-900 sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-md py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyBbkV1xQGhiRRf4tThgiW5jtJu2BL99KpA",
  authDomain: "finfuns1.firebaseapp.com",
  databaseURL: "https://finfuns1.firebaseio.com",
  projectId: "finfuns1",
  storageBucket: "finfuns1.appspot.com",
  messagingSenderId: "392489423742",
  appId: "1:392489423742:web:4ba5796a51e45fb596592f",
  measurementId: "G-KQGNP2YX97"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// validate email before submitting to firebase.
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', didSignUp: false, errorText: null };
    this.handleChange = this.handleChange.bind(this);
    this.saveToFirebase = this.saveToFirebase.bind(this);
  }

  saveToFirebase(email) {
    if (validateEmail(email)) {
      var emailObject = {
          email: email
      };
    
      firebase.database().ref('signups').push().set(emailObject)
          .then((snapshot) => {
            this.setState({didSignUp: true, errorText: null});
          }, function(error) {
              console.log('error' + error);
          });
    } else {
      this.setState({errorText: "Please enter a valid email"});
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
  
    return (
      <>
        <Header  />
        <Container>
          <TwoColumn>
            <LeftColumn>
              <Heading>
                Helping you expertly manage your finances.
              </Heading>
              <Subheading>
                {"Percy advises you on budgeting, allocating your savings, investing, taxes, and more for only $19/month - over 10 times cheaper than the average financial advisor.\u00B9"}
              </Subheading>
              <SignupText>
                We’re currently in beta. Sign up to get early access.
              </SignupText>

              {this.state.didSignUp
              ? (
              <Subheading>
                Thank you for signing up!
              </Subheading>
              )
              : (
              <Actions>
                <input onChange={this.handleChange} type="text" placeholder="Your email address" />
                <button onClick={() => this.saveToFirebase(this.state.value)}>Count Me In!</button>
              </Actions>
              )}
              <ErrorText>
                {this.state.errorText}
              </ErrorText>
              
            </LeftColumn>
            <RightColumn>
              <IllustrationContainer>
                <img tw="w-3/5 md:w-1/4 lg:w-1/2" src={DesignIllustration} alt="Design Illustration" />
              </IllustrationContainer>
            </RightColumn>
          </TwoColumn>
          <DecoratorBlob1 />
        </Container>
      </>
     );
  }
};

export default Hero