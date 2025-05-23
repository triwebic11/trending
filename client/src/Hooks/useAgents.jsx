// hooks/useAgents.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAgents = ({ type, agentNumber, phone }) => {
  const queryKey = ["agents", type, agentNumber, phone]; // এটা রি-ফেচে কাজ করবে

  const { data: agents = [], isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      const params = new URLSearchParams();

      if (type) params.append("type", type);
      if (agentNumber) params.append("agentNumber", agentNumber);
      if (phone) params.append("phone", phone);

      const url = params.toString()
        ? `https://api.win-pbu.com/api/agent/search?${params}`
        : `https://api.win-pbu.com/api/agent`;

      const res = await axios.get(url);
      console.log("agents hoooooooooook", res.data);
      return res.data;
    },
    enabled: !!(type || agentNumber || phone), // শুধু তখনই চালাবে যখন কিছু থাকবে
  });

  return { agents, isLoading, error, refetch };
};

export default useAgents;
