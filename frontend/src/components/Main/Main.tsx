import { useState } from 'react';
import { dataUser } from '@/data/data';
import type { User } from '@/types/User';

import { AssignmentDeveloperSection } from '@/components/Main/AssignmentDeveloperSection/AssignmentDeveloperSection';
import { WorkingGetSection } from '@/components/Main/WorkingGetSection/WorkingGetSection';
import { WorkingPostSection } from '@/components/Main/WorkingPostSection/WorkingPostSection';

import { MainSection } from './Main.styled';

export const Main = () => {
  const [users, setUsers] = useState<User[]>(dataUser);
  console.log("users:", users)

  const addUser = (newUser : User) => {
    setUsers((prev) => [...prev, newUser]);
    localStorage.setItem('users', JSON.stringify([...users, newUser])); //! Save to localStorage
  };

  return (
    <MainSection>
      <AssignmentDeveloperSection />
      <WorkingGetSection users={users} />
      <WorkingPostSection onAddUser={addUser} />
    </MainSection>
  );
};
