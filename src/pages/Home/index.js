import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import RightContentBlock from "../../components/ContentBlock/RightContentBlock";
import LeftContentBlock from "../../components/ContentBlock/LeftContentBlock";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const FAQBlock = lazy(() => import("../../components/FAQBlock"));
const Container = lazy(() => import("../../common/Container"));

const Home = () => {
  return (
    <Container>
      <RightContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        id="intro"
      />
      <LeftContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        subTitle={AboutContent.subTitle}
        subContent={AboutContent.subText}
        section={AboutContent.section}
        id="about"
      />

      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        section={MiddleBlockContent.section}
      />

      <FAQBlock id="faq"/>

      
    </Container>
  );
};

export default Home;
