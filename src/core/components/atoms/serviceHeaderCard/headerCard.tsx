import BgCard from "@/core/components/atoms/bgCard";
import {
	Computer,
} from "@/core/components/atoms/icons/service.icon";

function ServiceHeaderCard() {
  return (
      <BgCard height="85vh" width="100%">
        <Computer width='64' height='64' color="#2a0468"/>
      </BgCard>
  );
}

export default ServiceHeaderCard
