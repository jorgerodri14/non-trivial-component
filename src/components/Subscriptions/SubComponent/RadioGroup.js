import React from "react";

const RadioGroup = ({ value, onChange }) => (
  <div>
    <input
      type="radio"
      id="monthly"
      name="billingPeriod"
      value="MONTH"
      checked={value === "MONTH"}
      onChange={(e) => onChange(e.target.value)}
    />
    <label htmlFor="monthly">Monthly</label>
    <input
      type="radio"
      id="annual"
      name="billingPeriod"
      value="ANNUAL"
      checked={value === "ANNUAL"}
      onChange={(e) => onChange(e.target.value)}
    />
    <label htmlFor="annual">Annual</label>
  </div>
);

export default RadioGroup;
