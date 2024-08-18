import { useNavigate } from "react-router-dom";
function ComplaintsHome()
{
    
    const navigate=useNavigate();
    const ComplaintHandler=()=>{
          navigate('/complaints')
    }
     
    return(
        <> 
            <div className="sm:hidden max-sm:w-full" >
                 
                 <div className="w-[300px] bg-indigo-200 pt-10 pb-10 rounded-lg m-auto p-4 mt-24 ">
                       
                       <h1 className="font-bold text-sm text-center text-neutral-800 " >Your Comfort, Our Priority<br/>Share Your Hostel <span className="text-indigo-700 leading-relaxed" >Concerns Here!</span></h1>
                       <button onClick={ComplaintHandler} className="px-4 py-1 bg-indigo-400 text-sm rounded-2xl font-semibold mt-4 m-auto flex justify-center" >Contact Us Directly</button>

                 </div> 

            </div>
        </>
    )
}
export default ComplaintsHome;