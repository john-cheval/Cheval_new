/** @format */

"use client";

import { timeAgo } from "@/app/lib/time";
import { useEffect, useState } from "react";

const TimeAgo = ({ timestamp }) => {
  const [timeAgoString, setTimeAgoString] = useState("");

  useEffect(() => {
    const update = () => {
      setTimeAgoString(timeAgo(timestamp));
    };

    update();
    const interval = setInterval(update, 60000); // Update every minute

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [timestamp]);

  return <span>{timeAgoString}</span>;
};

export default TimeAgo;
