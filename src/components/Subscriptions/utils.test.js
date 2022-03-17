import React, { useState, Children, cloneElement } from "react";
import { RadioGroup } from "./SubComponent";
export { SubscriptionPlan } from './SubComponent'
const Subscriptions = ({ onSelect, children }) => {
  const [selectedPlanId, setSelectedPlanId] = useState();
  const [billingPeriod, setBillingPeriod] = useState("MONTH");

  return (
    <div>
      <RadioGroup
        value={billingPeriod}
        onChange={(value) => {
          setBillingPeriod(value);
        }}
      />

      {Children.map(children, (child) =>
        child.type.name === "SubscriptionPlan"
          ? cloneElement(child, {
              selectedPlanId: selectedPlanId,
              billingPeriod,
              onSelectPlan: (id) => {
                setSelectedPlanId(id);
              },
            })
          : child
      )}

      <button
        disabled={!selectedPlanId}
        onClick={() => onSelect({ id: selectedPlanId, billingPeriod })}
      >
        Select
      </button>
    </div>
  );
};

export default Subscriptions;
