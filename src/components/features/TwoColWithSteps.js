import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto py-5 md:py-5 items-center`;
const ImageColumn = tw.div`relative items-end lg:w-2/5`;
const TextColumn = styled.div(props => [
  tw`max-w-screen-md lg:w-3/5 mt-8`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 order-first lg:order-last`
]);

const IllustrationContainer = tw.div`flex justify-center items-center mt-12 lg:mt-0`;
const Image = tw.img`w-3/4 md:w-1/3 lg:w-2/3`;

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

const TextContent = tw.div`lg:py-8 text-left`;
const VerticalSpacer = tw.div`mb-8 w-full`;


// OLD STYLE:
// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
// const Heading = tw(
//   SectionHeading
// )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl text-gray-900 leading-tight`
const Subheading = tw.p`my-5 lg:my-8 text-base xl:text-lg`;


const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;

export default ({
  subheading1 = "Our Expertise",
  heading1 = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  subheading2 = "Our Expertise",
  heading2 = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Register",
      description: "Create an account with us using Google or Facebook."
    },
    {
      heading: "Download",
      description: "Browse and Download the template that you like from the marketplace."
    },
    {
      heading: "Run",
      description: "Follow the instructions to setup and customize the template to your needs."
    }
  ];

  if (!steps) steps = defaultSteps;

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <IllustrationContainer>
            <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
            {/* {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />} */}
          </IllustrationContainer>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading1}</Heading>
            <Subheading>{subheading1}</Subheading>
            <Heading>{heading2}</Heading>
            <Subheading>{subheading2}</Subheading>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <VerticalSpacer />
    </Container>
  );
};
