import { CardDeveloper } from '@/components/Main/WorkingGetSection/CardDeveloper/CardDeveloper';
import { CardList } from './DeveloperList.styled';

import { dataUser } from '@/data/data';
export const DeveloperList = () => {
  return (
    <CardList>
      {dataUser.map((user) => {
        return <CardDeveloper key={user.id} user={user} />;
      })}
    </CardList>
  );
};
