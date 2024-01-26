import { addBusinessData, getBusinessData} from "../../store/server";
import { EditDetails } from "./EditDetails";

export default function SaveChanges(name, address, phone, details){
    addBusinessData(name, address, phone, details);
    getBusinessData();
    EditDetails(false);
}