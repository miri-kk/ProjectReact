import {makeObservable, observable, action} from "mobx";

class AdminEdit{
    name="";
    address="";
    phone="";
    email="";
    isEdit=false;
    
constructor(){
        makeObservable(this,{
            name:observable,
            address:observable,
            phone:observable,
            email:observable,
            isEdit:observable,
            updateDetails:action,
            editDetails: action
        });
}
        setDetailsValues(name, address, phone, email) {
            this.name = name;
            this.address = address;
            this.phone = phone;
            this.email = email;
        }

        updateDetails=(name, address, phone, email ,detail)=>{
            this.name=name;
            this.address=address;
            this.phone=phone;
            this.email=email;
            this.detail=detail;
        }

        editDetails(status){
            this.isEdit=status
        }
}
export default new AdminEdit();