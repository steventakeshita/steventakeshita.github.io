import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MoneyGraph from "components/features/MoneyGraph.js";
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
        subheading1={"With a quality financial advisor, you could grow your money up to 3% more each year (this could translate to hundreds of thousands of dollars over your lifetime).\u00B2 Yet only 3 in 10 Americans have a financial advisor.\u00B3 What gives? The average financial advisor charges over $200/month!\u2074 But it gets worse. For $200/month, you would expect VIP treatment. The reality is that financial advisors rely heavily on software and are often just relaying the software’s suggestions to you."}
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

      <Features
        // subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            Percy optimizes your financial life.
          </>
        }
      />

      <MoneyGraph
        // subheading={<Subheading>Features</Subheading>}
        // heading={
        //   <>
        //     With Percy, your wealth could grow up to 3% more per year.
        //   </>
        // }
      />

      <FAQ
        heading={
          <>
            Frequently asked questions
          </>
        }
        faqs={[
          {
            question: "What is Percy?",
            answer: `Percy is an app that offers you unbiased, quality financial advice for a low monthly price. We’ll help you answer your burning financial questions like “Am I spending too much?”, “What’s the best use of my savings?”, and “How should I invest my retirement account?”`,
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
          },
          {
            question: "Shouldn't I be saving money instead of spending on financial advice?",
            answer: `Just like investing towards your fitness, mental health, or nutrition goals, Percy is an investment in your financial well-being. Just as you are much more likely to get in great physical shape with a personal trainer, you are much more likely to get in great financial shape with Percy. There are numerous studies that demonstrate the value a financial advisor can add, and most agree it's 3% in growth per year - while this might not seem like a lot initially, it could easily translate into hundreds of thousands of dollars over your lifetime.\u00B2`,
          },
          {
            question: "Will I have access to support should I encounter an issue?",
            answer: `As a Percy member, you will have access to our technical support team via email and text, and we usually respond within a few hours.`,
          },


          
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
