import { CardDeveloper } from '@/components/Main/WorkingGetSection/CardDeveloper/CardDeveloper';
import { CardList } from './DeveloperList.styled';

type DeveloperListProps = {
  users: {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    avatar: string;
  }[];
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
