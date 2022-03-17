import React from "react";

const SubscriptionPlan = ({
  id,
  selectedPlanId,
  annualPrice,
  monthlyPrice,
  name,
  onSelectPlan,
  billingPeriod,
}) => {
  const isSelected = selectedPlanId === id;
  const price = billingPeriod === "MONTH" ? monthlyPrice : annualPrice;

  return (
    <div onClick={() => onSelectPlan(id)}>
      <div>
        <h2>{name}</h2>
        <h2>$ {price}</h2>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
