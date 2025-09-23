import { AssignmentDeveloperSection } from '@/components/Main/AssignmentDeveloperSection/AssignmentDeveloperSection';
import { WorkingGetSection } from '@/components/Main/WorkingGetSection/WorkingGetSection';
import { WorkingPostSection } from '@/components/Main/WorkingPostSection/WorkingPostSection';

import { MainSection } from './Main.styled';
export const Main = () => {
  return (
    <MainSection>
      <AssignmentDeveloperSection />
      <WorkingGetSection />
      <WorkingPostSection />
    </MainSection>
  );
};
