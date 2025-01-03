"use client";
import React, { useState } from "react";
import FormattedPrice from "./FormattedPrice";
// import Button from "./ui";

const Orders = () => {
  // Mock data for orders
  const mockOrders = [
    { id: "order1", amount: 100 },
    { id: "order2", amount: 200 },
  ];

  const [total] = useState(
    mockOrders.reduce((sum, order) => sum + order.amount, 0)
  );

 

  return (
    <div className="flex flex-col gap-y-5 mt-5">
      <div>
        <h2 className="text-lg font-bold">Total Amount:</h2>
        <FormattedPrice amount={total} className="text-lg font-semibold" />
      </div>
     
    </div>
  );
};

export default Orders;
