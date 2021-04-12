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
  // const Subheading = tw.span`tracking-widest text-base`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      {/* The first scene */}
      <Hero roundedHeaderButton={true} />

      {/* Second step */}
      <FeatureWithSteps
        heading1={
          <>
            It's time to democratize financial advice.
          </>
        }
        subheading1={"While most people want help with their finances, only 3 in 10 Americans have a financial advisor. What gives? The average financial advisor charges over $200/month! But it gets worse. For $200/month, you would expect the VIP treatment. The reality is that financial advisors rely heavily on software and are often just relaying the software’s suggestions to you."}
        heading2={
          <>
            Let's cut out the middleman.
          </>
        }
        subheading2={"Powered by cutting-edge artificial intelligence, Percy gives you financial advice directly through an app. We take the cost out of financial planning and pass those savings on to you. Unlike the ancient software that’s made for advisors, our app is easy for you to understand and use."}
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
            question: "What is Percy?",
            answer: `Percy is an app that offers you unbiased, quality financial advice for a low monthly price. We’ll help you answer your burning financial questions like “Am I spending too much?”, “What’s the best use of my savings?”, and “How should I invest my retirement account?”`,
          },
          {
            question: "Will I get access to a human financial advisor?",
            answer: `The only way we can afford to offer our incredibly low fees is by not having human advisors available to our clients, and we don’t think you’re missing out. Therefore, we are not an appropriate service for someone who doesn’t like digital-first experiences. That being said, you can rest assured we will always be available should you encounter a problem with our service, and you will never suffer economic harm if we created the problem.`,
          },
          {
            question: "Is there a free option?",
            answer:
              "We are big believers in affordable financial advice, but we do not believe in free advice. Why not? Because it’s too good to be true. Anyone who’s giving you free financial advice is likely trying to sell you something else that will end up costing you more in the long run. By paying a low fee for Percy, you will never get any ads, and more importantly, we will never try to suggest financial products for you that aren’t in your best interest.",
          },
          {
            question: "How can I be sure your advice will put my interests first?",
            answer:
              "The government already thought of this one. As your financial advisor, we will be required by law to put your interests first. Most advisors say they will be your “fiduciary” (we will be too), but we don’t like financial jargon.",
          },
          {
            question: "Why should I trust software to help me manage my finances?",
            answer:
              "While financial advisors don’t like to admit it, they rely heavily on software for planning. This means that even if you were to hire an expensive human advisor, their recommendations would be based almost entirely on software. You should trust our software because our team has experience managing Princeton’s $26 billion endowment, working at J.P. Morgan, and building software at Microsoft.",
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
