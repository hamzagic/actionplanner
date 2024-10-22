export interface Plan {
  id: string | number;
  title: string;
  steps: PlanSteps[];
}

interface PlanSteps {
  order: number;
  title: string;
  items: PlanItems[];
}

interface PlanItems {
  order: number;
  text: string;
}
