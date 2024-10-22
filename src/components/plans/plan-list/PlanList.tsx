import styles from './PlanList.module.css';
import { Plan } from '../PlanTypes';
import PlanItem from '../plan-item/PlanItem';

const PlanList = ({ plans }: { plans: Plan[] }) => {
  return (
    <div className={styles.container}>
      {plans?.length > 0 && plans.map(plan =>
        <div key={plan.id}>{plan.title}</div>
      )}
    </div>
  );
}

export default PlanList;
