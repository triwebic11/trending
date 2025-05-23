import { Link } from "react-router-dom";
import siteadminImage from "../../assets/site-admin-list.jpg"
import AgentListTable from "../../components/AgentListTable";
import AgentSearchForm from "../../components/AgentSearchForm";
import ImageBoxDesigner from "../../components/ImageBoxDesigner";
import HomeCardSections from "../../components/HomeCardSections";
import ListComponant from "../../components/ListComponant";
const SiteAdminList = () => {

  return (
    <div className="">
      <ListComponant image={siteadminImage} text={"Master Agent List"}></ListComponant>
      
    </div>
  );
};

export default SiteAdminList;
