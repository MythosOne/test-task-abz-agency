import { UserForm } from '@/components/Main/WorkingPostSection/PostForm/UserForm';
import { Section, TitleSection } from './WorkingPostSection.styled';
export const WorkingPostSection = () => {
  return (
    <Section id="signUpSection">
      <TitleSection>Working with POST request</TitleSection>
      <UserForm />      
    </Section>
  );
};
