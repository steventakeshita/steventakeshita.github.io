import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";

import * as S from "./styles";
import image from "./SavingsAllocationiPhone.png"

const LeftContentBlock = ({ icon, title, content, subTitle, subContent, section, t, id }) => {
  return (
    <S.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={13} md={13} sm={13} xs={24}>
          <Slide left>
            <Image
              src={image}
              preview={false}>
            </Image>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <h6>{t(subTitle)}</h6>
              <S.Content>{t(subContent)}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === "object" &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <S.MinTitle>{t(item.title)}</S.MinTitle>
                          <S.MinPara>{t(item.content)}</S.MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LeftContentBlock>
  );
};

export default withTranslation()(LeftContentBlock);
