import styled from "styled-components";
import { StyledPyramid } from "../../components/pyramid";

export const Container = styled.div``;
export const ContentWrapper = styled.div`
  padding: 80px 100px 30px 100px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 100px;
  border-bottom: 2px solid #f1f1f1;
`;
export const Logo = styled.img`
  width: 100px;
  height: 48px;
`;
export const UnorderedList = styled.ul`
  width: 500px;
  list-style-type: none;

  display: flex;
  justify-content: space-between;
`;
export const List = styled.li`
  font-size: 1.3em;
  font-weight: 500;
`;
export const ButtonWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18em;
`;
export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 48px 0px;
  position: relative;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const Wrap = styled.div`
  width: 50%;
  position: relative;
`;
export const Heading = styled.h3`
  font-size: 4em;
`;
export const Span = styled.span`
  position: relative;
  :after {
    content: "";
    width: 4.6em;
    height: 0.2em;
    background-color: #ffff18;
    position: absolute;
    bottom: 27px;
    left: 15px;
    z-index: -20;
  }
`;
export const Plane = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 10px;
`;
export const Text = styled.p`
  font-size: 1.2em;
  font-weight: 500;
  width: 80%;
  color: #2f2f30;
  line-height: 2em;
  padding-bottom: 48px;
`;
export const Row = styled.div`
  display: flex;
`;
export const StyledImage = styled.img`
  border-radius: 50%;
  width: 240px;
  height: 240px;
`;

export const OrangeShape = styled.div`
  width: 240px;
  height: 240px;
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
    width: 144px;
    height: 144px;
    background: #ffb899;
    position: absolute;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
`;
export const GreenShape = styled.div`
  width: 240px;
  height: 240px;
  background-color: #b9ff82;
  position: relative;
  border-top-left-radius: 15%;
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
  overflow: hidden;
  :after {
    content: "";
    width: 240px;
    height: 240px;
    background: #21ef00;
    position: absolute;
    border-top-right-radius: 80%;
    border-top-left-radius: 15%;
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
  }
`;
export const YellowShape = styled.div`
  width: 240px;
  height: 240px;
  background-color: #efd700;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transform: rotate(-50deg);
  :after {
    content: "";
    width: 120px;
    height: 240px;
    background: #f7eb80;
    position: absolute;
  }
`;
export const BlueShape = styled.div`
  width: 240px;
  height: 240px;
  background-color: #2a99ff;
  border-radius: 10%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  :after {
    content: "";
    width: 144px;
    height: 144px;
    background: #efd700;
    position: absolute;
    border-radius: 50%;
  }
`;
export const CompaniesContainer = styled.div`
  background: #fbfbfb;

  padding: 0px 100px;
`;
export const Company = styled.img`
  width: 10%;
`;
export const SubHeading = styled(Heading)`
  font-size: 3em;
  font-weight: 500;
  line-height: 1em;

  padding-top: 0px;
  line-height: 60px;
`;
export const ImageContainer = styled.div`
  width: 40%;
  padding-top: 56px;

  position: relative;
`;
export const RestyledImage = styled(StyledImage)`
  position: absolute;
  top: 170px;
  left: 112px;
`;
export const Div = styled.div`
  padding: 0px 0px 16px 0px;
  width: 290px;
  margin-right: 5em;
`;
export const Title = styled.p`
  font-size: 1.4em;
  font-weight: 600;
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
  font-size: 1.2em;
  font-weight: 700;
  line-height: 0em;
  padding-top: 16px;
`;
export const RestyledDiv = styled(Div)`
  border-radius: 5%;
  text-align: center;
  background: #f9fafa;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 32px 48px 0px 32px;
  margin-right: 4em;
`;
export const RestyledWrap = styled(Wrap)`
  width: 40%;
`;
export const MiddleImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -112px;
`;
export const BottomImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -112px;
`;
export const Book = styled.div`
  width: 23%;
  position: relative;
`;
export const BookImage = styled.img`
  border-radius: 10px;
  width: ${(props) => (props.long ? "100%" : "100%")};
  height: ${(props) => (props.long ? "340px" : "unset")};
`;
export const Description = styled.p`
  background: white;
  padding: 6px 32px;
  font-size: 1.1em;
  width: 80px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  top: 0px;
`;
export const FooterContent = styled.div`
  border-top: 2px solid #f3f3f4;
  border-bottom: 2px solid #f3f3f4;
  padding: 30px 100px;
  margin-top: 40px;
`;
export const FooterLogoWrap = styled.div`
  width: 420px;
`;
export const FooterDiv = styled.div`
  width: 120px;
`;
export const Email = styled(Text)`
  font-weight: 600;
  padding-left: 8px;
  margin-top: -8px;
`;
export const CopyWrite = styled.p`
  font-size: 1.2em;
  margin: 0px;
`;
export const FooterButton = styled.div`
  width: 320px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
export const FooterText = styled(Text)`
  padding-bottom: 0px;
`;
export const FooterFlexBox = styled(FooterButton)`
  width: unset;
  padding: 16px 100px;
`;
// styles for all the pyramid in the body
export const GreenPyramid = styled(StyledPyramid)`
  border: 3px solid #63f44b;
  position: absolute;
  left: -48px;
  top: 50px;
`;
export const GreenPyramid2 = styled(GreenPyramid)`
  top: unset;
  bottom: unset;
  left: unset;
  right: 100px;
`;
export const GreenPyramid3 = styled(GreenPyramid)`
  top: unset;
  bottom: unset;
  left: unset;
  right: 50px;
`;
export const GreenPyramid4 = styled(GreenPyramid)`
  top: unset;
  bottom: -20px;
  left: 848px;
  right: unset;
`;
export const BluePyramid = styled(StyledPyramid)`
  border: 3px solid #8bc7ff;
  position: absolute;
  right: 120px;
  bottom: 130px;
`;
export const BluePyramid2 = styled(BluePyramid)`
  top: unset;
  bottom: 0px;
  left: 50px;
  right: unset;
`;
export const BluePyramid3 = styled(BluePyramid)`
  top: 150px;
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
  bottom: 180px;
  left: unset;
  right: 300px;
`;
export const BluePyramid6 = styled(BluePyramid)`
  top: unset;
  bottom: 50px;
  left: unset;
  right: 0px;
`;
export const YellowPyramid = styled(StyledPyramid)`
  border: 3px solid #f4e456;
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 10px;
  left: -55px;
`;
export const YellowPyramid2 = styled(YellowPyramid)`
  bottom: unset;
  right: 300px;
  top: -50px;
  left: unset;
`;
export const YellowPyramid3 = styled(YellowPyramid)`
  top: -50px;
  bottom: unset;
  left: unset;
  right: -48px;
`;
export const YellowPyramid4 = styled(YellowPyramid)`
  top: 0px;
  bottom: unset;
  left: unset;
  right: unset;
`;
export const YellowPyramid5 = styled(YellowPyramid)`
  top: 300px;
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
  margin-top: 110px;
`;
export const YellowPyramid7 = styled(YellowPyramid)`
  top: unset;
  bottom: -50px;
  left: unset;
  right: 50px;
`;
export const YellowPyramid8 = styled(YellowPyramid)`
  top: 0px;
  bottom: unset;
  left: 16px;
  right: unset;
`;
export const YellowPyramid9 = styled(YellowPyramid)`
  top: unset;
  bottom: 50px;
  left: 400px;
  right: unset;
`;
