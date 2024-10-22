import { Plan } from '../PlanTypes';
import styles from './PlanItem.module.css';

const PlanItem = ({ plans }: { plans: Plan[] }) => {
  return(
    <div>
      {plans.length > 0 && plans.map(plan =>
      <div className={styles.plan} key={plan.id}>
        <div className={styles.planTitle}>{plan.title}</div>
        {plan.steps.length > 0 && plan.steps.map(step =>
          <div key={step.order}>
            <div className={styles.stepTitle}>{step.title}</div>
            {step.items && step.items.length > 0 ? (
              <ul>
                {step.items.map(item => (
                  <li key={item.order}>{item.text}</li>
                ))}
              </ul>
            ) : (
              <p></p>
            )}
          </div>
        )}
      </div>
    )}
    </div>
  );
}

export default PlanItem;
