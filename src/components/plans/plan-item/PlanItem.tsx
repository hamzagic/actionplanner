import { Plan } from '../PlanTypes';
import styles from './PlanItem.module.css';

const PlanItem = ({ plan }: { plan: Plan }) => {
  return(
    <div>
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
    </div>
  );
}

export default PlanItem;
