import {
  Section,
  Container,
  Title,
  Text,
  NavContainer,
  NavItem,
  NavLink,
} from './AssignmentDeveloperSection.styled';
export const AssignmentDeveloperSection = () => {
  //! Сделать плавный scroll
  return (
    <Section id="developerSection">
      <Container>
        <Title>Test assignment for front-end developer</Title>
        <Text>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Text>
        <NavContainer>
          <NavItem>
            <NavLink href="#signUpSection">Sign Up</NavLink>
          </NavItem>
        </NavContainer>
      </Container>
    </Section>
  );
};

AssignmentDeveloperSection.whyDidYouRender = true;
