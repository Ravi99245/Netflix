import {
  Container,
  DetailsContainer,
  ImageContainer,
  LadyImage,
  LadyImageContainer,
  DownLoadContianer,
  StrangerHeight,
  StrangerContainer,
  TextContainer,
  Name,
  Download,
  DownloadImageContainer,
  HeadingContainer,
  Heading,
  Paragraph,
} from "./styledComponent";

const ThirdContainer = () => (
  <Container>
    <DetailsContainer>
      <HeadingContainer>
        <Heading>Download your shows to watch offline</Heading>
        <Paragraph>
          Save your favourites easily and always have something to watch.
        </Paragraph>
      </HeadingContainer>
      <ImageContainer>
        <LadyImageContainer>
          <LadyImage
            src="https://res.cloudinary.com/dxa4rbmrj/image/upload/v1719985970/mobile-0819_aicf1z.jpg"
            alt="Lady"
          />
          <DownLoadContianer>
            <StrangerContainer>
              <StrangerHeight
                src="https://res.cloudinary.com/dxa4rbmrj/image/upload/v1719986888/boxshot_afshgb.png"
                alt="stranger"
              />
            </StrangerContainer>
            <TextContainer>
              <Name>Stranger Things</Name>
              <Download>Downloading...</Download>
            </TextContainer>
            <DownloadImageContainer aria-hidden="true"></DownloadImageContainer>
          </DownLoadContianer>
        </LadyImageContainer>
      </ImageContainer>
    </DetailsContainer>
  </Container>
);

export default ThirdContainer;
