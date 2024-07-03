import {
  Container,
  Heading,
  Paragraph,
  DetailsContainer,
  HeadingContainer,
  ImageContainer,
  Image,
} from "./styledCompnent";

const KidsContainer = () => (
  <Container>
    <DetailsContainer>
      <HeadingContainer>
        <Heading>Create profiles for kids</Heading>
        <Paragraph>
          Send children on adventures with their favourite charactres in space
          made just for them-free with your membership
        </Paragraph>
      </HeadingContainer>
      <ImageContainer>
        <Image
          src="https://res.cloudinary.com/dxa4rbmrj/image/upload/v1720007778/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL_jeqj39.png"
          alt="kids"
        />
      </ImageContainer>
    </DetailsContainer>
  </Container>
);

export default KidsContainer;
