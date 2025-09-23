import { DeveloperList } from './DeveloperList/DeveloperList';

import { Section, TitleSection } from './WorkingGetSection.styled';
import { Button } from '@/components/Button/Button';

export const WorkingGetSection = () => {
  return (
    <Section id="usersSection">
      <TitleSection>Working Get Section</TitleSection>
      <DeveloperList />
      <Button
        variant="showMore"
        onClick={() => {
          console.log('click Show More');
        }}
        label="Show More"
        type="button"
      >
        Show More
      </Button>
    </Section>
  );
};
