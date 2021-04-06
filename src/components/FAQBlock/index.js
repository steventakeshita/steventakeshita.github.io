import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { FaChartPie, FaPiggyBank, FaChartLine } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import * as S from "./styles";
import SvgIcon from "../../common/SvgIcon";
import Faq from "react-faq-component";

const data = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "Is there a free option?",
            content: `If you don’t pay for a product, the product needs to extract value from you in another way. Usually this is through selling your data, advertising, or hidden fees. By charging you a small amount, we can ensure the advice we give you is always top quality and unbiased.`,
        },
        {
            title: "How can I be sure your advice is right for me?",
            content: "As a financial advisor, we are required by law to put your interests first.",
        },
        {
            title: "Why should I trust software to make my financial plan?",
            content: `While financial advisors don’t like to admit it, they rely heavily on software for planning. You should trust our software because Percy’s team has experience managing Princeton’s $26 billion endowment, working at J.P. Morgan, and building software at Microsoft.`,
        }
    ],
};

const styles = {
    // bgColor: 'white',
    // titleTextColor: "blue",
    rowTitleColor: "",
    rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const Button = lazy(() => import("../../common/Button"));

const FAQBlock = ({ title, content, button, section, t, id}) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="left" align="left" id={id}>
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t("FAQ")}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />
                </Row>
              </S.ServiceWrapper>
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(FAQBlock);
