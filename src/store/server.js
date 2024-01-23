import axios from 'axios';
import  DataStore from './store.js';
import AdminEdit from './AdminEdit.js';


export async function getServices() {
    const services = await axios.get('http://localhost:8787/services');
    DataStore.setServices(services)

}

export async function addService(service){
    const res = await axios.get('http://localhost:8787/services',{...service});
    if (res.status==200){
        DataStore.addService(service)
        return "success"
    }
    else
    return "failed";
}

export async function getBusinessData() {
    try
    {
      const businessData = await axios.get('http://localhost:8787/businessData');
      const { name, address, phone, email, isEdit } = businessData;
      AdminEdit.setDetailsValues(name, address, phone, email);
      AdminEdit.editDetails(isEdit);
      return businessData;
    }
    catch (error)
    {
      console.error(error);
      throw error;
    }
  }
  
  export async function addBusinessData(businessData) {
    try {
      const res = await axios.get('http://localhost:8787/businessData');
      if (res.status === 200) {
        AdminEdit.addBusinessData();
        return "success";
      } else {
        return "failed";
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  