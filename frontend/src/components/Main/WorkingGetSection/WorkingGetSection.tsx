import { Button } from '@/components/Button/Button';

export const WorkingGetSection = () => {
  return (
    <section id="users">
      <h2>Working Get Section</h2>
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
    </section>
  );
};
