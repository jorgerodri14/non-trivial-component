import React, { useState, createContext, useContext } from "react";

const SubscriptionsContextState = createContext({});
const SubscriptionsContextSetter = createContext({});

export const useSubscritionsContextState = () =>
  useContext(SubscriptionsContextState);
export const useSubscritionsContextSetter = () =>
  useContext(SubscriptionsContextSetter);

function subsciptionsReducer(state, action) {
  switch (action.type) {
    case "changePeriod":
      return {
        ...state,
        billingPeriod: action.billingPeriod,
      };
    case "selectPlan":
      return {
        ...state,
        selectedPlanId: action.selectedPlanId,
      };
      default:
          return state;
  }
}

export const SubscriptionPlanProviver = ({ children }) => {
    //TODO userReducer
  return (
    <SubscriptionsContextState.Provider>
      <SubscriptionsContextSetter>{children}</SubscriptionsContextSetter>
    </SubscriptionsContextState.Provider>
  );
};
