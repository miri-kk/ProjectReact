import './App.css'
import  DataStore from '../../store/store.js';


const ServiceList=(observer(()=> {

  return (
    <>
      {DataStore.services.map((services, index)=>{
        <div key={index}>{services.name}</div>
      })}
    </>
  )
}))

export default ServiceList