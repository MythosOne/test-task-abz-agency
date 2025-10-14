import type { User } from '@/types/User';

import { CardDeveloper } from '@/components/Main/WorkingGetSection/CardDeveloper/CardDeveloper';
import { CardList } from './DeveloperList.styled';

type DeveloperListProps = {
  users: User[];
};
export const DeveloperList: React.FC<DeveloperListProps> = ({ users }) => {
  return (
    <CardList>
      {users.map((user) => {
        return <CardDeveloper key={user.id} user={user} />;
      })}
    </CardList>
  );
};
