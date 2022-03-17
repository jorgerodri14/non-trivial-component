import React from "react";
import Subscriptions, {
  SubscriptionPlan,
} from "../../components/Subscriptions";

const subscriptionPlans = [
  { id: 0, name: "Beginner", annualPrice: 7.2, monthlyPrice: 50 },
  { id: 1, name: "Professional", annualPrice: 17.2, monthlyPrice: 80 },
  { id: 2, name: "Enterprise", annualPrice: 57.2, monthlyPrice: 100 },
];

const SubscriptionsPage = () => (
  <Subscriptions
    onSelect={(selectedPlan) => {
      // Do something with this data
    }}
  >
    {/*  <SubscriptionPlan {...subscriptionPlanProps} />
    <SubscriptionPlan {...subscriptionPlanProps} />
    <SubscriptionPlan {...subscriptionPlanProps} /> */}
    {(addedProps) => (
      <>
        <SubscriptionPlan {...subscriptionPlans[0]} {...addedProps} />
        <SubscriptionPlan {...subscriptionPlans[1]} {...addedProps} />
        <SubscriptionPlan {...subscriptionPlans[2]} {...addedProps} />
      </>
    )}
  </Subscriptions>
);

export default SubscriptionsPage;
