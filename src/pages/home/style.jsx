import styled from "styled-components";
import { StyledPyramid } from "../../components/pyramid";

export const Container = styled.div``;
export const ContentWrapper = styled.div`
  padding: 50px 100px 30px 100px;
  @media screen and (max-width: 800px) {
    padding: 30px 16px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 100px;
  border-bottom: 2px solid #f1f1f1;
  @media screen and (max-width: 800px) {
    padding: 16px 16px;
  }
`;
export const Logo = styled.img`
  height: 48px;
`;
export const UnorderedList = styled.ul`
  width: 450px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const List = styled.li`
  font-size: 1em;
  font-weight: 500;
`;
export const ButtonWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 0px;
  position: relative;

  @media screen and (max-width: 800px) {
    display: block;
    padding: 0px;
  }
`;
export const CompanyFlexBox = styled(FlexBox)`
  @media screen and (max-width: 800px) {
    display: flex;
    padding: 0px;
    /* align-items: center; */
  }
`;
export const ImageFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 0px;
  position: relative;
`;
export const FlexBox2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const Wrap = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 800px) {
    width: unset;
    margin-bottom: 90px;
  }
`;
export const Wrap2 = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 800px) {
    width: unset;
    margin: 150px 0px 90px 0px;
  }
`;
export const ImageWrap = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 800px) {
    width: 300px;
    /* background: red; */
    margin: auto;
    margin-bottom: 90px;
  }
`;
export const Heading = styled.h3`
  font-size: 3em;
  margin-bottom: 0px;
  @media screen and (max-width: 800px) {
    /* text-align: center; */
    font-size: 2em;
  }
`;
export const Span = styled.span`
  position: relative;
  :after {
    content: "";
    width: 4.6em;
    height: 0.2em;
    background-color: #ffff18;
    position: absolute;
    bottom: 20px;
    left: 15px;
    z-index: -20;

    @media screen and (max-width: 800px) {
      bottom: 12px;
      left: 8px;
    }
  }
`;
export const Plane = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 10px;
`;
export const Text = styled.p`
  font-size: 0.8em;
  font-weight: 500;
  width: 80%;
  color: #2f2f30;
  line-height: 2em;
  padding-bottom: 30px;
  @media screen and (max-width: 800px) {
    width: unset;
  } ;
`;
export const ButtonWrapp2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
`;
export const Row = styled.div`
  display: flex;
`;
export const StyledImage = styled.img`
  border-radius: 50%;
  width: 170px;
  height: 170px;
  @media screen and (max-width: 920px) {
    width: 100px;
    height: 100px;
  }
`;
export const StyledImage2 = styled(StyledImage)`
  width: 240px;
  height: 240px;
  @media screen and (max-width: 920px) {
    width: 200px;
    height: 200px;
  }
`;
export const OrangeShape = styled.div`
  width: 170px;
  height: 170px;
  background-color: #e5703d;
  position: relative;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  :after {
    content: "";
    width: 90px;
    height: 90px;
    background: #ffb899;
    position: absolute;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  @media screen and (max-width: 920px) {
    width: 100px;
    height: 100px;
    :after {
      width: 60px;
      height: 60px;
    }
  }
`;
export const GreenShape = styled.div`
  width: 170px;
  height: 170px;
  background-color: #b9ff82;
  position: relative;
  border-top-left-radius: 15%;
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
  overflow: hidden;
  :after {
    content: "";
    width: 170px;
    height: 170px;
    background: #21ef00;
    position: absolute;
    border-top-right-radius: 80%;
    border-top-left-radius: 15%;
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
  }
  @media screen and (max-width: 920px) {
    width: 100px;
    height: 100px;
    :after {
      width: 100px;
      height: 100px;
    }
  }
`;
export const YellowShape = styled.div`
  width: 170px;
  height: 170px;
  background-color: #efd700;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transform: rotate(-50deg);
  :after {
    content: "";
    width: 85px;
    height: 200px;
    background: #f7eb80;
    position: absolute;
  }
  @media screen and (max-width: 920px) {
    width: 100px;
    height: 100px;
    :after {
      width: 50%;
      height: 100px;
    }
  }
`;
export const BlueShape = styled.div`
  width: 170px;
  height: 170px;
  background-color: #2a99ff;
  border-radius: 10%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  :after {
    content: "";
    width: 104px;
    height: 104px;
    background: #efd700;
    position: absolute;
    border-radius: 50%;
  }
  @media screen and (max-width: 920px) {
    width: 100px;
    height: 100px;
    :after {
      width: 60px;
      height: 60px;
    }
  }
`;
export const CompaniesContainer = styled.div`
  background: #fbfbfb;
  padding: 0px 100px;
  @media screen and (max-width: 800px) {
    padding: 16px 16px;
  }
`;
export const Company = styled.img`
  width: 10%;
  @media screen and (max-width: 800px) {
    width: 70px;
  }
`;
export const Company2 = styled.img`
  width: 10%;
  @media screen and (max-width: 800px) {
    width: 60px;
    height: 25px;
  }
`;
export const SubHeading = styled(Heading)`
  font-size: 2em;
  font-weight: 500;
  margin: 0px;
  padding-top: 0px;
  line-height: 60px;
  @media screen and (max-width: 800px) {
    line-height: 40px;
  }
`;
export const ImageContainer = styled.div`
  width: 40%;
  padding-top: 56px;
  position: relative;
  @media screen and (max-width: 800px) {
    width: unset;
  }
`;
export const RestyledImage = styled(StyledImage2)`
  position: absolute;
  top: 170px;
  left: 112px;
  @media screen and (max-width: 800px) {
    top: 150px;
  }
`;
export const Div = styled.div`
  width: 250px;
  @media screen and (max-width: 800px) {
    width: 150px;
  }
`;
export const Title = styled.p`
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 0px;
`;
export const Icon = styled.div`
  width: 48px;
  height: 48px;
  background: #f1f1fd;
  border-radius: ${(props) => (props.circle ? "50%" : "20%")};
  font-size: 1.5em;
  color: #6872ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.p`
  font-size: 1em;
  font-weight: 700;
  line-height: 0em;
  padding-top: 16px;
`;
export const RestyledDiv = styled.div`
  border-radius: 5%;
  text-align: center;
  background: #f9fafa;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px;

  @media screen and (max-width: 800px) {
    width: unset;
    padding: 32px 16px 0px 16px;
    margin-bottom: 32px;
  }
`;
export const RestyledWrap = styled(Wrap)`
  width: 38%;
  @media screen and (max-width: 800px) {
    width: 270px;
    margin: 48px auto;
  }
`;
export const MiddleImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -80px;
`;
export const BottomImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -80px;
`;
export const Book = styled.div`
  width: 23%;
  position: relative;
  @media screen and (max-width: 800px) {
    width: unset;
    margin-bottom: 32px;
  }
`;
export const BookImage = styled.img`
  border-radius: 10px;
  width: ${(props) => (props.long ? "100%" : "100%")};
  height: ${(props) => (props.long ? "230px" : "unset")};
`;
export const Description = styled.p`
  background: white;
  padding: 6px 20px;
  font-size: 1em;
  width: 70px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  top: 0px;
`;
export const FooterContent = styled.div`
  border-top: 2px solid #f3f3f4;
  border-bottom: 2px solid #f3f3f4;
  padding: 20px 100px;
  margin-top: 40px;
  @media screen and (max-width: 800px) {
    padding: 20px 16px;
  }
`;
export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 0px;
  position: relative;

  @media screen and (max-width: 800px) {
    padding: 0px;
    flex-wrap: wrap;
  }
`;
export const FooterLogoWrap = styled.div`
  width: 320px;
  @media screen and (max-width: 800px) {
    width: 150px;
  }
`;
export const FooterDiv = styled.div`
  width: 120px;
  @media screen and (max-width: 800px) {
    width: 150px;
  }
`;
export const Email = styled(Text)`
  font-weight: 600;
  padding-left: 8px;
  margin-top: -3px;
`;
export const CopyWrite = styled.p`
  font-size: 12px;
  margin: 0px;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;
export const FooterButton = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    padding: 16px 16px;
    width: unset;
  }
`;
export const FooterText = styled(Text)`
  padding-bottom: 0px;
`;
export const FooterFlexBox = styled(FooterButton)`
  width: unset;
  flex-direction: row-reverse;
  padding: 16px 100px;
  /* margin-bottom: 30em; */
  @media screen and (max-width: 800px) {
    display: block;
    padding: 16px 16px;
  }
`;
// styles for all the pyramid in the body
export const GreenPyramid = styled(StyledPyramid)`
  border: 2px solid #63f44b;
  position: absolute;
  left: -20px;
  top: 30px;
  @media screen and (max-width: 800px) {
    left: 0px;
  }
`;
export const GreenPyramid2 = styled(GreenPyramid)`
  top: unset;
  bottom: unset;
  left: unset;
  right: 50px;
`;
export const GreenPyramid3 = styled(GreenPyramid)`
  top: unset;
  bottom: unset;
  left: unset;
  right: 50px;
`;
export const GreenPyramid4 = styled(GreenPyramid)`
  top: unset;
  bottom: -10px;
  left: 650px;
  right: unset;
  @media screen and (max-width: 800px) {
    bottom: -40px;
    left: 20px;
  }
`;
export const BluePyramid = styled(StyledPyramid)`
  border: 2px solid #8bc7ff;
  position: absolute;
  right: 80px;
  bottom: 80px;
`;
export const BluePyramid2 = styled(BluePyramid)`
  top: unset;
  bottom: -30px;
  left: 50px;
  right: unset;
`;
export const BluePyramid3 = styled(BluePyramid)`
  top: 140px;
  bottom: unset;
  left: unset;
  right: 0px;
`;
export const BluePyramid4 = styled(BluePyramid)`
  top: unset;
  bottom: 50px;
  left: unset;
  right: unset;
`;
export const BluePyramid5 = styled(BluePyramid)`
  top: unset;
  bottom: 100px;
  left: unset;
  right: 200px;
`;
export const BluePyramid6 = styled(BluePyramid)`
  top: unset;
  bottom: 50px;
  left: unset;
  right: 0px;
`;
export const YellowPyramid = styled(StyledPyramid)`
  border: 2px solid #f4e456;
  width: 9px;
  height: 9px;
  position: absolute;
  bottom: -50px;
  left: -30px;
  @media screen and (max-width: 800px) {
    left: -1px;
  }
`;
export const YellowPyramid2 = styled(YellowPyramid)`
  bottom: unset;
  right: 200px;
  top: -30px;
  left: unset;
`;
export const YellowPyramid3 = styled(YellowPyramid)`
  top: -30px;
  bottom: unset;
  left: unset;
  right: -30px;
  @media screen and (max-width: 800px) {
    right: 0px;
  }
`;
export const YellowPyramid4 = styled(YellowPyramid)`
  top: 0px;
  bottom: unset;
  left: unset;
  right: unset;
`;
export const YellowPyramid5 = styled(YellowPyramid)`
  top: 280px;
  bottom: unset;
  left: unset;
  right: 0px;
`;
export const YellowPyramid6 = styled(YellowPyramid)`
  top: unset;
  bottom: unset;
  left: unset;
  right: unset;
  position: unset;
  margin-top: 80px;
  @media screen and (max-width: 800px) {
    margin-top: 45px;
  }
`;
export const YellowPyramid7 = styled(YellowPyramid)`
  top: unset;
  bottom: -30px;
  left: unset;
  right: 30px;
`;
export const YellowPyramid8 = styled(YellowPyramid)`
  top: 20px;
  bottom: unset;
  left: 16px;
  right: unset;
  @media screen and (max-width: 800px) {
    top: -15px;
  }
`;
export const YellowPyramid9 = styled(YellowPyramid)`
  top: unset;
  bottom: 50px;
  left: 330px;
  right: unset;
`;
