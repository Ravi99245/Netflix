import {
  Container,
  DetailsContainer,
  HeadingContainer,
  Heading,
  ImageContainer,
  TVImage,
  ImageVideoContainer,
  RealtiveContainer,
  Video,
  VideoContainer,
  Paragraph,
} from "./styledComponent";

const FourthContainer = () => (
  <Container>
    <DetailsContainer>
      <HeadingContainer>
        <Heading>Watch everywhere</Heading>
        <Paragraph>
          Steream unlimited movies and TV shows on your phone, tablet, laptop,
          adn TV
        </Paragraph>
      </HeadingContainer>
      <ImageContainer>
        <ImageVideoContainer>
          <RealtiveContainer>
            <TVImage
              src="https://res.cloudinary.com/dxa4rbmrj/image/upload/v1720003260/device-pile-in_e4p6om.png"
              alt="tv"
            />
            <VideoContainer>
              <Video autoPlay muted loop playsInline>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                  type="video/mp4"
                />
              </Video>
            </VideoContainer>
          </RealtiveContainer>
        </ImageVideoContainer>
      </ImageContainer>
    </DetailsContainer>
  </Container>
);

export default FourthContainer;
