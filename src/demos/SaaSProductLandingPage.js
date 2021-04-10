import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/SavingsAllocationiPhone.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      {/* The first scene */}
      <Hero roundedHeaderButton={true} />

      {/* Second step */}
      <FeatureWithSteps
        heading1={
          <>
            Expensive financial advisors charge over $300/month
          </>
        }
        subheading1={<Subheading>For that amount of money, you would expect VIP treatment. The reality is that financial advisors relay advice that’s generated from ancient software.</Subheading>}
        heading2={
          <>
            Percy cuts out the middleman
          </>
        }
        subheading2={<Subheading>By delivering advice directly, we take the cost out of financial planning, and pass those savings on to you!</Subheading>}
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />

      {/* Third screen */}
      <Features
        // subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            Percy optimizes your financial life
          </>
        }
      />
      <FAQ
        heading={
          <>
            FAQ
          </>
        }
        faqs={[
          {
            question: "Is there a free option?",
            answer:
              "If you don’t pay for a product, the product needs to extract value from you in another way. Usually this is through selling your data, advertising, or hidden fees. By charging you a small amount, we can ensure the advice we give you is always top quality and unbiased."
          },
          {
            question: "How can I be sure your advice is right for me?",
            answer:
              "As a financial advisor, we are required by law to put your interests first."
          },
          {
            question: "Why should I trust software to make my financial plan?",
            answer:
              "While financial advisors don’t like to admit it, they rely heavily on software for planning. You should trust our software because Percy’s team has experience managing Princeton’s $26 billion endowment, working at J.P. Morgan, and building software at Microsoft."
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
