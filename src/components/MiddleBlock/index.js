import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { FaChartPie, FaPiggyBank, FaChartLine } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import * as S from "./styles";
import SvgIcon from "../../common/SvgIcon";

const Button = lazy(() => import("../../common/Button"));

const MiddleBlock = ({ title, content, button, section, t }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  
                  <Col span={8}>
                    <FaChartPie size={42}></FaChartPie>
                    <S.MinTitle>{"Budgeting"}</S.MinTitle>
                    <S.MinPara>{"We monitor your spending so you don’t have to and ensure you’re saving enough to reach your financial goals"}</S.MinPara>
                  </Col>
                  <Col span={8}>
                    <FaPiggyBank size={42}></FaPiggyBank>
                    <S.MinTitle>{"Allocating Savings"}</S.MinTitle>
                    <S.MinPara>{"We make sure every dollar you save goes to the highest priority place whether that means paying off debt, saving for retirement, or building an emergency savings fund"}</S.MinPara>
                  </Col>
                  <Col span={8}>
                    <FaChartLine size={42}></FaChartLine>
                    <S.MinTitle>{"Investing"}</S.MinTitle>
                    <S.MinPara>{"We make sure you pick the best investments and account types to maximize the chances of reaching your goals"}</S.MinPara>
                  </Col>
                  {/* <Col span={8}>
                    <SvgIcon src={item.icon} width="60px" height="60px" />
                    <S.MinTitle>{t(item.title)}</S.MinTitle>
                    <S.MinPara>{t(item.content)}</S.MinPara>
                  </Col>
                  <Col span={8}>
                    <SvgIcon src={item.icon} width="60px" height="60px" />
                    <S.MinTitle>{t(item.title)}</S.MinTitle>
                    <S.MinPara>{t(item.content)}</S.MinPara>
                  </Col> */}
                </Row>
              </S.ServiceWrapper>
              {button ? (
                <Button
                  name="submit"
                  type="submit"
                  onClick={() => scrollTo("mission")}
                >
                  {t(button)}
                </Button>
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
