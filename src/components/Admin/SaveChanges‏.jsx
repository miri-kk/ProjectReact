import AdminEdit from "../../store/AdminEdit";
import { addBusinessData} from "../../store/server";
import { EditDetails } from "./EditDetails";

export default function SaveChanges(name, address, phone, details){
    AdminEdit.updateDetails(name, address, phone, details);
    addBusinessData({name, address, phone, details});
    EditDetails(false);
}