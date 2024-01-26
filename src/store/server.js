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
      const name = businessData.data.name
      AdminEdit.updateDetails(name, "", "", "");
    }
    catch (error)
    {
    }
  }
  
  export async function addBusinessData(name, address, phone, email ) {
    try {
      const res = await axios.post('http://localhost:8787/businessData',{"name":name,"address":address, "phone":phone, "details":email } );
        return "success";
      
    } catch (error) {
    }
  }
  