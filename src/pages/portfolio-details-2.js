import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/common/CTA";
import imgWorkCover from "../assets/image/png/apps/airbnb1.png";
import imgS1 from "../assets/image/png/apps/airbnb2.png";
import imgS2 from "../assets/image/png/apps/airbnb3.png";
import imgS3 from "../assets/image/png/apps/airbnb4.png";
// import imgS4 from "../assets/image/jpg/details/details-9.jpg";
// import imgS5 from "../assets/image/jpg/details/details-14.jpg";
// import imgS6 from "../assets/image/jpg/details/details-13.jpg";
import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Section hero>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box>
                  <Text variant="tag">Web App</Text>
                  <Title className="my-4">
                    Redux Store Air Bnb Prototype <br /> 
                    Made to be easily manageable and concise.
                  </Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >
                    The goal was to create a redux based web app that replicated some of
                    air BNB's functions.
                  </Text>
                </Box>
              </Col>
            </Row>

            <Box pt={["4rem", null, null, "6.25rem"]}>
              <img src={imgWorkCover} alt="" className="img-fluid w-100" />
            </Box>
          </Container>
        </Section>

        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Client</Text>
                <Title variant="cardBig" className="mt-3">
                  Air Bnb Bargain
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                {/* <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  Oct 15, 2019
                </Title> */}
              </Col>
              <Col lg="4" className="d-flex justify-content-lg-end">
                <Button arrowRight><a target="_blank" href="https://airbnbclone22.herokuapp.com/">Live work</a></Button>
              </Col>
            </Row>
          </Container>
        </div>
        <Section className="mt-lg-5 pb-0">
          <Container>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS1} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={imgS2} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS3} alt="" className="img-fluid w-100" />
              </Col>
              {/* <Col lg="6" className="mb-5 pl-lg-4">
                <img src={imgS4} alt="" className="img-fluid w-100" />
              </Col> */}
            </Row>
          </Container>
        </Section>

        <Section bg="dark" className="pt-0">
          <Container>
            {/* <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS5} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={imgS6} alt="" className="img-fluid w-100" />
              </Col>
            </Row> */}

            <div className="text-center mt-lg-5">
              <Text variant="tag" className="mb-1" color="lightShade">
                Next Project
              </Text>
              <Link to="portfolio-details">
                <Button
                  arrowRight
                  className="border-0 bg-transparent shadow-none text-capitalize py-3"
                  css={`
                    font-weight: 700
                    font-size: 1.5rem;
                    letter-spacing: -1.2px;
                    line-height: 1.375;
                    @media ${device.md} {
                      font-size: 2rem;
                    }
                `}
                >
                  Replace
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
        <Box py={4}>
          <CTA />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
