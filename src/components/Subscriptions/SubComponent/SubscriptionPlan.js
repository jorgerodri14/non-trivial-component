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
      <div className="subsciptions__plan">
        <span className="subsciptions__plan__text">{name}</span>
        <span className="subsciptions__plan__text">$ {price}</span>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
