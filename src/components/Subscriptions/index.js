import React, { useState } from "react";
import "./index.scss";
import { RadioGroup } from "./SubComponent";
import { SubscriptionPlanProviver } from './context'

export { SubscriptionPlan } from "./SubComponent";

const Subscriptions = ({ onSelect, children }) => {
 
//TODO pasar el contexto
  return (
    <div className="subsciptions">
      <RadioGroup
        value={billingPeriod}
        onChange={(value) => {
          setBillingPeriod(value);
        }}
      />

      {/*       {Children.map(children, (child) =>
        child.type.name === "SubscriptionPlan"
          ? cloneElement(child, {
              selectedPlanId: selectedPlanId,
              billingPeriod,
              onSelectPlan: (id) => {
                setSelectedPlanId(id);
              },
            })
          : child
      )} */}
      <SubscriptionPlanProviver>
      <div className="subsciptions__container">
        {children({
          selectedPlanId: selectedPlanId,
          billingPeriod,
          onSelectPlan: (id) => {
            setSelectedPlanId(id);
          },
        })}
      </div>
      </SubscriptionPlanProviver>
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
