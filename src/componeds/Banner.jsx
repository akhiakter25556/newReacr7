export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="dev1  
  justify-center   p-6 relative flex
     rounded-lg  gap-4 text-white text-center my-6 px-4">
      
<div className="   bg-gradient-to-r w-180 h-40 text-xl  
 from-blue-500 to-purple-500 items-center ">
  <img className="w-100 absolute text-center items-center bg-cover size-aotu " 
  src="img/vector2.png" alt="" />


  <p className="items-center mt-10">In Progress: 
    <br />{inProgressCount}</p>


</div>


<div className="w-180 h-40 text-center items-center text-xl
 bg-gradient-to-r from-green-400 to-green-600">


<img className=" absolute w-100 h-50 text-white " src="img/vector1.png" alt="" />
      <p className="mt-10">Resolved: <br /> {resolvedCount}</p>
   

</div>
<div className="py-10 ">
<h1>Customer Tickets</h1>

</div>
    </div>

    
  );
}

