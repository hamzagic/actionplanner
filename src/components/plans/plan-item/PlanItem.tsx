import { Plan } from '../PlanTypes';
import styles from './PlanItem.module.css';

const PlanItem = ({ plan }: { plan: Plan }) => {
  return(
    <div className={styles.container}>
      <h2 className={styles.planTitle}>{plan.title}</h2>
        {plan.steps.length > 0 && plan.steps.map(step =>
          <div key={step.order}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            {step.items && step.items.length > 0 && (
              <>
                {step.items.map(item => (
                  <div className={styles.step} key={item.order}>
                    <input type='checkbox' name={step.title} className={styles.input} />
                    <label htmlFor={step.title}>{item.text}</label>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
    </div>
  );
}

export default PlanItem;
