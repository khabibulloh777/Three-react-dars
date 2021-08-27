import React , {useState} from 'react'     ;
import './Config.css';
import { FiSettings } from 'react-icons/fi';

function Config() {
    const[configOpen, setConfigOpen ] = useState(false)


    const openDiv = (e) =>{
        const apple = document.querySelector(".config__collectionIteam")
        apple.addEventListener('click', hey)
        function hey(e){
            console.log('bosildi')
        }

        if(configOpen === false){
            const config = document.querySelector(".config")  
            config.classList.add("active")    
            setConfigOpen(true)
        }
      else{
        config.classList.remove("active")
        setConfigOpen(false)
        const config = document.querySelector(".config")
        
      }
    
    }
    return (
        <div className="config__container">
            <FiSettings onClick={openDiv}/>
            <div className="config">
                <ul className="config__collection">
                    <li className="config__collectionIteam">
                        <input type="checkbox" className="apple-switch" />
                        Names</li>
                    <li className="config__collectionIteam">     <input type="checkbox" className="apple-switch" /> surname</li>
                    <li className="config__collectionIteam">      <input type="checkbox" className="apple-switch" />ages</li>
                    <li className="config__collectionIteam">      <input type="checkbox" className="apple-switch" />hobbies</li>
                    <li className="config__collectionIteam">         <input type="checkbox" className="apple-switch" />country</li>
                    <li className="config__collectionIteam">         <input type="checkbox" className="apple-switch" />city</li>
                    <li className="config__collectionIteam">     <input type="checkbox" className="apple-switch" />address</li>
                </ul>
            </div>
        </div>
    )
}

export default Config





