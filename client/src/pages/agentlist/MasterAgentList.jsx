
import Container from "../../components/Container";
import masteragentimage from "../../assets/master-agent.jpg"
import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import AgentSearchForm from "../../components/AgentSearchForm";
import AgentListTable from "../../components/AgentListTable";
import ImageBoxDesigner from "../../components/ImageBoxDesigner";
import HomeCardSections from "../../components/HomeCardSections";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAgents from "../../Hooks/useAgents";
import { useState } from "react";
import ListComponant from "../../components/ListComponant";

const MasterAgentList = () => {
    const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Search value:", searchText);
    // You can now use the searchText value
  };

  const [searchData, setSearchData] = useState(null);

  const handleAgentSearch = (data) => {
   
    setSearchData(data);
  };
  //  const { agents, isLoading, error, refetch } = useAgents({ type: "Master" });

  const { data: agents = [], isLoading, refetch } = useQuery({
    queryKey: ["agents", searchData?.agentType, searchData?.agentId, searchText],
    queryFn: async () => {
      const res = await axios.get(`https://api.win-pbu.com/api/agent?type=${searchData?.agentType || ''}&agentNumber=${searchText || ''}&uniqueId=${searchData?.agentId || ''}`);
      return res.data;
    },
  });
  
  
 
  return (
    <div className="">
     <ListComponant image={masteragentimage} text={"Master Agent List"}></ListComponant>
    </div>
  );
};

export default MasterAgentList;
