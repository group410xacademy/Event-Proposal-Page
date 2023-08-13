import Form from "../components/Form"
import './Home.css'
export default function Home(){

    return <div className="partyimage container"><div>logo</div>
    <img  className="partyimage" src="background.png"/>
    <div className="d-flex flex-row justify-content-between px-5">
    
      <div>
        text will be diaplyed here
      </div>
      <div className='bg-white'>
       <Form/>
      </div>
    </div>
    </div>
}