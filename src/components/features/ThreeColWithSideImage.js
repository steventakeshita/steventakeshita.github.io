import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

import { FaChartPie, FaPiggyBank, FaChartLine } from "react-icons/fa";


const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-5 md:py-5`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
// const Heading = tw(SectionHeading)`w-full`;
const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl text-gray-900 leading-tight`

let iconStyles = { color: "#6602ee" };


const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-8 w-full md:mt-4`

const Column = styled.div`
  ${tw`w-full md:w-1/3`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-start text-left h-full md:m-8 `}
  .imageContainer {
    ${tw`bg-gray-200 text-center rounded-md p-5 mb-2 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mb-12 mt-4`}
  }

  .title {
    ${tw`mt-4 tracking-wide text-gray-900 font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-base leading-normal`}
  }
`;


const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-5 transform translate-x-32 translate-y-0 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security."
    }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {/* {subheading && <Subheading>{subheading}</Subheading>} */}
        <Heading>{heading}</Heading>
        {/* {description && <Description>{description}</Description>} */}
        <VerticalSpacer />
        <Column key={1}>
            <Card>
              <span className="imageContainer">
                <FaChartPie style={iconStyles} size={42}></FaChartPie>
              </span>
              <span className="textContainer">
                <span className="title">Budgeting</span>
                  <p className="description">
                    We monitor your spending so you don???t have to and ensure you???re saving enough to reach your financial goals.
                  </p>
              </span>
            </Card>
        </Column>
        <Column key={2}>
            <Card>
              <span className="imageContainer">
                <FaPiggyBank style={iconStyles} size={42}></FaPiggyBank>
              </span>
              <span className="textContainer">
                <span className="title">Saving</span>
                <p className="description">
                  We make sure every dollar you save goes to the account that's best for you whether that means paying off debt, saving for retirement, building an emergency savings fund, etc.
                </p>
              </span>
            </Card>
        </Column>
        <Column key={3}>
            <Card>
              <span className="imageContainer">
                <FaChartLine style={iconStyles} size={42}></FaChartLine>
              </span>
              <span className="textContainer">
                <span className="title">Investing</span>
                <p className="description">
                  We make sure you pick the best investments and account types (to save you taxes) to maximize the chances of reaching your goals.
                </p>
              </span>
            </Card>
        </Column>
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
