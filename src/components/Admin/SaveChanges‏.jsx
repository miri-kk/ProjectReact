import AdminEdit from "./AdminEdit";
import { EditDetails } from "./EditDetails";

export default function SaveChanges(name, address, phone, details){
    AdminEdit.updateDetails(name, address, phone, details);
    EditDetails(false);
}