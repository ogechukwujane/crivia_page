import logo from "../../assets/logo.png";
import { Button } from "../../components/button";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.jpg";
import image5 from "../../assets/img5.jpg";
import image6 from "../../assets/img6.jpg";
import image7 from "../../assets/img7.jpg";
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";
import book4 from "../../assets/book4.jpg";
import plane from "../../assets/plane.jpg";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import uber from "../../assets/uber.png";
import amazon from "../../assets/amazon.png";
import {
  AiOutlineClockCircle,
  AiOutlineLock,
  AiFillStar,
  AiOutlineMail,
} from "react-icons/ai";
import { SiFastapi } from "react-icons/si";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdFace } from "react-icons/md";
import { BiUserPin } from "react-icons/bi";
import {
  BlueShape,
  ButtonWrapp,
  Container,
  ContentWrapper,
  FlexBox,
  GreenShape,
  Header,
  Heading,
  List,
  Logo,
  OrangeShape,
  Row,
  StyledImage,
  UnorderedList,
  Wrap,
  YellowShape,
  Text,
  CompaniesContainer,
  SubHeading,
  Div,
  Title,
  Icon,
  Label,
  RestyledDiv,
  RestyledWrap,
  MiddleImage,
  BottomImage,
  ImageContainer,
  RestyledImage,
  Book,
  BookImage,
  Description,
  FooterContent,
  FooterDiv,
  FooterLogoWrap,
  Email,
  CopyWrite,
  FooterButton,
  FooterFlexBox,
  GreenPyramid,
  YellowPyramid,
  YellowPyramid2,
  BluePyramid,
  YellowPyramid3,
  YellowPyramid4,
  YellowPyramid5,
  GreenPyramid2,
  BluePyramid2,
  BluePyramid3,
  YellowPyramid6,
  GreenPyramid3,
  BluePyramid4,
  YellowPyramid7,
  BluePyramid5,
  BluePyramid6,
  YellowPyramid8,
  YellowPyramid9,
  GreenPyramid4,
  Company,
  Plane,
  Span,
  FooterText,
  FlexBox2,
  StyledImage2,
  ImageFlexBox,
  FooterFlex,
  Wrap2,
  ButtonWrapp2,
  CompanyFlexBox,
  ImageWrap,
  Company2,
} from "./style";

const Home = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <UnorderedList>
          <List>Home</List>
          <List>Services</List>
          <List>About</List>
          <List>How it works</List>
        </UnorderedList>
        <ButtonWrapp>
          <Button primary>Learn More</Button>
          <Button color="white">Sign In</Button>
        </ButtonWrapp>
      </Header>
      <ContentWrapper>
        {/* first section with image */}
        <FlexBox>
          <Wrap>
            <GreenPyramid />
            <YellowPyramid />
            <YellowPyramid2 />
            <BluePyramid />
            <Heading>
              Consulting <br /> Solution To Grow
              <Plane src={plane} />
              <br /> Your<Span> Business</Span>
            </Heading>
            <Text>
              Open repair of infrarental aorticaneurysm or dissection, plus
              repair of associated arterial trauma, following unsuccessful
              endovascular repair.
            </Text>
            <ButtonWrapp2>
              <Button color="white">Get Started</Button>
              <Button primary>Be a Mentor</Button>
            </ButtonWrapp2>
          </Wrap>
          <ImageWrap>
            <YellowPyramid3 />
            <Row>
              <StyledImage src={image1} />
              <OrangeShape />
              <StyledImage src={image2} />
            </Row>
            <Row>
              <GreenShape />
              <StyledImage src={image3} />
              <YellowShape />
            </Row>
            <Row>
              <StyledImage src={image4} />
              <BlueShape />
              <StyledImage src={image5} />
            </Row>
          </ImageWrap>
        </FlexBox>
        {/* end of first section with image */}
      </ContentWrapper>
      <CompaniesContainer>
        <CompanyFlexBox>
          <Company src={facebook} />
          <Company src={google} />
          <Company src={uber} />
          <Company2 src={amazon} />
        </CompanyFlexBox>
      </CompaniesContainer>
      <ContentWrapper>
        {/* begin of second section with image */}
        <FlexBox>
          <ImageContainer>
            <YellowPyramid4 />
            <YellowPyramid5 />
            <GreenPyramid2 />
            <BluePyramid2 />
            <StyledImage2 src={image7} />
            <RestyledImage src={image6} />
          </ImageContainer>
          <Wrap2>
            <BluePyramid3 />
            <SubHeading>Consult your</SubHeading>
            <SubHeading>business problems</SubHeading>
            <SubHeading>with us</SubHeading>
            <FlexBox2>
              <Div>
                <Icon>
                  <AiOutlineClockCircle />
                </Icon>
                <Title>24 Hours services with mentors</Title>
              </Div>
              <Div>
                <Icon>
                  <AiOutlineLock />
                </Icon>
                <Title>We keep your company secret</Title>
              </Div>
            </FlexBox2>
            <FlexBox2>
              <Div>
                <Icon>
                  <SiFastapi />
                </Icon>
                <Title>Quick response to help you</Title>
              </Div>
              <Div>
                <Icon>
                  <RiUserSettingsLine />
                </Icon>
                <Title>Discuss problems together</Title>
              </Div>
            </FlexBox2>
          </Wrap2>
        </FlexBox>
        {/* end of second section with image */}
        {/* begin of article section */}
        <FlexBox>
          <SubHeading>
            Articles that can help <br /> you grow your
            <br /> business
          </SubHeading>
          <Wrap>
            <Text>
              Open repair of infrarenal aortic aneurysm or dissection, plus
              repair of associated arterial trauma, following unsuccessful
              endovascular repair
            </Text>
            <Button primary color="blue">
              Read More
            </Button>
          </Wrap>
        </FlexBox>
        <FlexBox>
          <Book>
            <BookImage src={book1} />
            <Description>Marketing</Description>
            <Title>Make your sales a customer magnet</Title>
            <Text>
              this product exists of delightful and classic names in natural
              tones, have a cooler.
            </Text>
            <Button primary>Read</Button>
          </Book>
          <Book>
            <BookImage long src={book2} />
            <Description>Financial</Description>
            <Title>Make your sales a customer magnet</Title>
            <Text>
              this product exists of delightful and classic names in natural
              tones, have a cooler.
            </Text>
            <Button primary>Read</Button>
          </Book>
          <Book>
            <BookImage src={book3} />
            <Description>Leadership</Description>
            <Title>Make your sales a customer magnet</Title>
            <Text>
              this product exists of delightful and classic names in natural
              tones, have a cooler.
            </Text>
            <Button primary>Read</Button>
          </Book>
          <Book>
            <BookImage long src={book4} />
            <Description>Marketing</Description>
            <Title>Make your sales a customer magnet</Title>
            <Text>
              this product exists of delightful and classic names in natural
              tones, have a cooler.
            </Text>
            <Button primary>Read</Button>
          </Book>
        </FlexBox>
        {/* end of article section */}
        {/* begin of section four with images */}
        <FlexBox>
          <RestyledWrap>
            <GreenPyramid3 />
            <BluePyramid4 />
            <YellowPyramid7 />
            <MiddleImage>
              <StyledImage src={image5} />
            </MiddleImage>
            <ImageFlexBox>
              <StyledImage src={image2} />
              <YellowPyramid6 />
              <StyledImage src={image3} />
            </ImageFlexBox>
            <BottomImage>
              <StyledImage src={image1} />
            </BottomImage>
          </RestyledWrap>
          <Wrap>
            <BluePyramid5 />
            <SubHeading>
              Find and consult your
              <br /> problem with the best
              <br /> mentor
            </SubHeading>
            <Text>
              Open repair of infrarenal aortic aneurysm or dissection, plus
              repair of associated arterial trauma, following unsuccessful
              endovascular repair
            </Text>
            <Button color="white">Get Started</Button>
          </Wrap>
        </FlexBox>
        {/* end of section four with images */}
        {/* how to consult section */}
        <FlexBox>
          <SubHeading>
            How do you go
            <br /> about consulting
            <br /> with us
          </SubHeading>
          <Wrap>
            <Text>
              Open repair of infrarenal aortic aneurysm or dissection, plus
              repair of associated arterial trauma, following unsuccessful
              endovascular repair
            </Text>
            <Button primary color="blue">
              Read More
            </Button>
          </Wrap>
        </FlexBox>
        <FlexBox>
          <GreenPyramid4 />
          <RestyledDiv>
            <Icon circle>
              <BiUserPin />
            </Icon>
            <Label>Register</Label>
            <Text>
              Open repair of infrarenal aortic aneurysm or dissection, plus
              repair of associated arterial trauma, following
            </Text>
          </RestyledDiv>
          <RestyledDiv>
            <Icon circle>
              <MdFace />
            </Icon>
            <Label>Find a Mentor</Label>
            <Text>
              Open repair of infrarenal aortic aneurysm or dissection, plus
              repair of associated arterial trauma, following
            </Text>
          </RestyledDiv>
          <RestyledDiv>
            <Icon circle>
              <AiFillStar />
            </Icon>
            <Label>Be shining</Label>
            <Text>
              Open repair of infrarenal aortic aneurysm or dissection, plus
              repair of associated arterial trauma, following
            </Text>
          </RestyledDiv>
        </FlexBox>
        {/* end of how to consult section */}
      </ContentWrapper>
      {/* footer section */}
      <FooterContent>
        <FooterFlex>
          <BluePyramid6 />
          <YellowPyramid8 />
          <YellowPyramid9 />
          <FooterLogoWrap>
            <Logo src={logo} />
            <Text>
              Open repair of infrarental <br />
              cortic aneurysm or
              <br /> dissection
            </Text>
            <Row>
              <AiOutlineMail style={{ fontSize: "1.3em" }} />
              <Email>hi@crivia.com</Email>
            </Row>
          </FooterLogoWrap>
          <FooterDiv>
            <Label>What we do</Label>
            <Text>
              Home <br />
              How it Works
              <br />
              Features
              <br />
              Our Programs
              <br />
              Our Partner
              <br />
              Blog
            </Text>
          </FooterDiv>
          <FooterDiv>
            <Label>What we do</Label>
            <Text>
              About Us <br />
              Contact Us
              <br />
              Careers
              <br />
              FAQ
              <br />
              Insight
              <br />
              Help
            </Text>
          </FooterDiv>
          <FooterDiv>
            <Label>Partner</Label>
            <Text>
              Facebook
              <br />
              Google
              <br />
              Uber
              <br />
              Amazon
              <br />
              Twitter
            </Text>
          </FooterDiv>
          <FooterDiv>
            <Label>Follow us</Label>
            <Text>
              Linkedin
              <br />
              Instagram
              <br />
              Facebook
              <br />
              Twitter
            </Text>
          </FooterDiv>
        </FooterFlex>
      </FooterContent>
      <FooterFlexBox>
        <FooterButton>
          <FooterText>Terms of Service</FooterText>
          <FooterText primary>Privacy Policy</FooterText>
        </FooterButton>
        <CopyWrite>Copyright&copy;2022.Crivia.All Right Reserved</CopyWrite>
      </FooterFlexBox>
      {/* end of footer content */}
    </Container>
  );
};

export default Home;
