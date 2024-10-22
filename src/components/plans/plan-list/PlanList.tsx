'use client';
import { useState } from 'react';
import styles from './PlanList.module.css';
import { Plan } from '../PlanTypes';
import PlanItem from '../plan-item/PlanItem';

const PlanList = ({ plans }: { plans: Plan[] }) => {
  const [currentVisibleId, setCurrentVisibleId] = useState<string|number>();
  const showDetails = (id: string | number) => {
    setCurrentVisibleId(id);
  }
  return (
    <>
    {!currentVisibleId && <h3 className={styles.plans}>Current Plans</h3>}
    <div className={styles.container}>
      {plans?.length > 0 && plans.map(plan =>
        <div key={plan.id}>
        {!currentVisibleId &&
          <div key={plan.id} className={styles.plansContainer}>
            <span className={styles.title}>{plan.title}</span>
            <span className={styles.details} onClick={() => showDetails(plan.id)}>Details</span>
          </div>
        }
        {currentVisibleId === plan.id && <PlanItem plan={plan} />}
        </div>
      )}
    </div>
    </>
  );
}

export default PlanList;
