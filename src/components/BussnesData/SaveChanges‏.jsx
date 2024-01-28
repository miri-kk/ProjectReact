import { setBusinessData, getBusinessData} from "../../store/server";
import { EditDetails } from "./EditDetails";

export default async function  SaveChanges(name, address, phone, details){
    console.log(details)
    // debugger
    await setBusinessData(name, address, phone, details);
    getBusinessData();
    EditDetails(false);
}