import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import styled from "styled-components";
import tw from "twin.macro";


import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js'
// import classes from "./LineGraph.module.css";


//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Title);

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-5 md:py-5`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
// const Heading = tw(SectionHeading)`w-full`;
const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl text-gray-900 leading-tight`

let iconStyles = { color: "#6602ee" };


const Description = tw(SectionDescription)`w-full text-center`;
const MoreImportantDescription = tw(SectionDescription)`w-full text-center text-red-900 `;


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

const data = {
    labels: ['Year 1', '', '', '', '', '', '', '', '', '', '', '', '$100,000 Investment', '', '', '', '', '', '', '', '', '', '', '', 'Year 30'],
    datasets: [
    {
        label: '# of No Votes',
        data: [1.05, 1.1025, 1.157625, 1.21550625, 1.276281563, 1.240095641, 1.407100423, 1.477455444, 1.551328216, 1.38894627, 1.510339358, 1.795856326, 1.885649142, 1.979931599, 2.078928179, 2.482874588, 2.30018318, 2.406619234, 2.526950195, 2.653297705, 2.60596259, 2.50526072, 3.071523756, 3.225099944, 3.386354941, 3.555672688, 3.733456322, 3.920129138, 4.116135595, 4.321942375],
        fill: true,
        backgroundColor: 'rgb(200, 200, 200)',
        borderColor: 'rgba(200, 200, 200)',
        lineTension: .5
        },
      {
        label: '# of Votes',
        data: [1.08, 1.1664, 1.259712, 1.36048896, 1.469328077, 1.486874323, 1.713824269, 1.85093021, 1.999004627, 1.808924997, 2.131638997, 2.518170117, 2.719623726, 2.937193624, 3.172169114, 3.725942643, 3.700018055, 3.996019499, 4.315701059, 4.660957144, 4.843833715, 4.436540413, 5.871463646, 6.341180737, 6.848475196, 7.396353212, 7.988061469, 8.627106386, 9.317274897, 10.06265689],
        fill: true,
        backgroundColor: 'rgb(91, 21, 255, .7)',
        borderColor: 'rgba(91, 21, 255)',
        lineTension: .5
      },
    ],
  };
  
  const options = {
    elements: {
        point: {
            radius: 0
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        }
    },
    scales: {
        x: {
            grid: {
                drawBorder: true,
                drawTicks: false,
                drawOnChartArea: false
            },
            ticks: {
                maxRotation: 0,
                minRotation: 0
            }
        },
        y: {
            grid: {
                drawBorder: true,
                drawTicks: false,
                drawOnChartArea: false
            },
            ticks: {display: false},
            min: 0.5,
            max: 7
        }
    },
  };


export default class MoneyGraph extends React.Component { 
    render() {
        return (
            <Container>
            <ThreeColumnContainer>
              {/* {subheading && <Subheading>{subheading}</Subheading>} */}
              <Heading>{          <>
            With Percy, your wealth could grow up to 3% more per year.²
          </>}</Heading>
          <Description>$432,194 (Without Percy)</Description><MoreImportantDescription style={{color: "#6415FF"}}> $1,006,266 (With Percy)</MoreImportantDescription>
              {/* {description && <Description>{description}</Description>} */}
              <VerticalSpacer />

            {/* Chart JS Graph */}
              <Line data={data} options={options} />

            </ThreeColumnContainer>
            <DecoratorBlob />
          </Container>
        )
    }

};
