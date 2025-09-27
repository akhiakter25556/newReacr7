export default function Navbar() {
  return (
    <nav className="  stroke-lime-800 flex bg-white opacity-80
     justify-between items-center  text-black px-6 py-4">
      <h1 className="text-lg md:text-xl font-bold">CS — Ticket System</h1>
 
      <ul className=" justify-center p-2 mr-0 hidden md:flex gap-6 text-sm font-medium">
<li>Home</li>
<li>FAQ</li>
<li>Changelog</li>
<li>Blog</li>
<li>Download</li>
<li>Contact</li>


      </ul>
      <div className="flex gap-4 ">
        {/* <a href="#">Home</a>
        <a href="#">Tickets</a> */}
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
         + New Ticket
        </button>
      </div>
    </nav>
  );
 }
