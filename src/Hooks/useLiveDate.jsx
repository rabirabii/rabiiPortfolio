"use client";

import React, { useState, useEffect } from "react";

const useLiveDate = () => {
  const [currentDate, setCurentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return currentDate;
};

export default useLiveDate;
