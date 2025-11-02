import { useEffect, useState } from 'react';
// import { dataUser } from '@/data/data';
import type { User } from '@/types/User';

import { DeveloperList } from './DeveloperList/DeveloperList';

import { Section, TitleSection } from './WorkingGetSection.styled';
import { Button } from '@/components/Button/Button';

type workingGetSectionProps = {
  users: User[];
};
export const WorkingGetSection: React.FC<workingGetSectionProps> = ({
  users,
}) => {
  // console.log("users:", users)
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [users]);

  return (
    <Section id="usersSection">
      <TitleSection>Working with <br/> Get request</TitleSection>
      <DeveloperList users={currentUsers} />
      {currentPage < totalPages && (
        <Button
          variant="showMore"
          onClick={() => {
            handleNextPage();
          }}
          label="Show More"
          type="button"
        >
          Show More
        </Button>
      )}
    </Section>
  );
};

WorkingGetSection.whyDidYouRender = true;
