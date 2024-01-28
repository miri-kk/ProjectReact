import axios from 'axios';
// import  DataStore from './store.js';
import AdminEdit from './AdminEdit.js';


// export async function getServices() {
//     const services = await axios.get('http://localhost:8787/services');
//     DataStore.setServices(services)

// }

// export async function addService(service){
//     const res = await axios.get('http://localhost:8787/services',{...service});
//     if (res.status==200){
//         DataStore.addService(service)
//         return "success"
//     }
//     else
//     return "failed";
// }

export async function getBusinessData() {
    try
    {
      const businessData = await axios.get('http://localhost:8787/businessData');
      const{name, address, phone, email} = businessData.data;
      AdminEdit.updateDetails(name, address,phone, email);
    }
    catch (error)
    {
    }
  }
  
  export async function setBusinessData(name, address, phone, email ) {
    try {
      const res = await axios.post('http://localhost:8787/businessData',{"name":name,"address":address, "phone":phone, "email":email } );
        return "success";
      
    } catch (error) {
    }
  }  