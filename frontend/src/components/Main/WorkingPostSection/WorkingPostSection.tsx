import type { User } from '@/types/User';

import { UserForm } from '@/components/Main/WorkingPostSection/PostForm/UserForm';
import { Section, TitleSection } from './WorkingPostSection.styled';

type WorkingPostSectionProps = {
  onAddUser: (user: User) => void
}
export const WorkingPostSection: React.FC<WorkingPostSectionProps> = ({onAddUser}) => {
  return (
    <Section id="signUpSection">
      <TitleSection>Working with <br/> POST request</TitleSection>
      <UserForm onAddUser={onAddUser}/>      
    </Section>
  );
};
