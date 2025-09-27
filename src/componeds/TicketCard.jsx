import { GoDotFill } from "react-icons/go";
import { MdDateRange } from "react-icons/md";

export default function TicketCard({ ticket, onSelect }) {
  return (


    
    <div
      onClick={() => onSelect(ticket)}
      className=" rounded-lg p-4 shadow cursor-pointer
       hover:bg-gray-100 bg"
    >

      <div className="flex justify-between  ">
          <h3 className=" font-bold">{ticket.title } </h3>
<button  className={` rounded-xl mr-0 
${ticket.status == "Open" ? "bg-green-500" : "bg-yellow-500"}
  w-30 h-10 flex `}

><span className="items-center text-2xl"><GoDotFill /></span>{ticket.status} </button>

      </div>
    
      <p>{ticket.description}</p>
      <p className="text-sm text-gray-600">
        Customer: {ticket.customer} | Priority: {ticket.priority}

      </p>
      <div className="">

 <p className="text-xs text-gray-500 flex justify-between">#108 <br />
       olivia <p className="flex items-center"> <MdDateRange />{ ticket.createdAt}</p></p>

<p className="text-xs text-gray-500 flex justify-center"> </p>
      </div>
     
    </div>
  );
}





// import { CalendarDays } from "lucide-react";

// export default function TicketCard({ ticket, onSelect }) {
//   return (
//     <div
//       className="border rounded-2xl p-4 shadow hover:shadow-lg transition cursor-pointer flex flex-col justify-between"
//     >
//       {/* Title */}
//       <h3 className="text-lg font-bold mb-2">
//         {ticket.title}
//       </h3>

//       {/* Description */}
//       <p className="text-sm text-gray-700 flex-1">{ticket.description}</p>

//       {/* Footer Section */}
//       <div className="mt-4 flex items-center justify-between">
//         {/* Open Button */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation(); // card click prevent
//             onSelect(ticket);
//           }}
//           className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
//         >
//           Open
//         </button>

//         {/* Calendar with date */}
//         <div className="flex items-center gap-1 text-gray-500 text-sm">
//           <CalendarDays size={16} />
//           <span>{ticket.createdAt}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ✅ Parent Component to render 6 cards in a grid
// export function TicketList({ tickets, onSelect }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
//       {tickets.slice(0, 6).map((ticket) => (
//         <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
//       ))}
//     </div>
//   );
// }

// import { GoDotFill } from "react-icons/go";
// import { CalendarDays } from "lucide-react";

// export default function TicketCard({ ticket, onSelect }) {
//   return (
//     <div
//       onClick={() => onSelect(ticket)}
//       className="border rounded-2xl p-4 shadow hover:shadow-lg transition 
//                  cursor-pointer flex flex-col justify-between bg-white"
//     >
//       {/* Title */}
//       <h3 className="text-base md:text-lg font-bold mb-2">
//         {ticket.title} - Can't Access Account
//       </h3>

//       {/* Description */}
//       <p className="text-sm text-gray-700 flex-1">{ticket.description}</p>

//       {/* Footer Section */}
//       <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
//         {/* Open Button */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation(); // card click prevent
//             onSelect(ticket);
//           }}
//           className="flex items-center gap-1 px-3 py-1 bg-green-300 text-green-700 
//                      rounded-lg text-sm hover:bg-green-400 w-fit"
//         >
//           <GoDotFill className="text-lg" /> Open
//         </button>

//         {/* Calendar with date */}
//         <div className="flex items-center gap-1 text-gray-500 text-sm">
//           <CalendarDays size={16} />
//           <span>{ticket.createdAt}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ✅ Parent Component to render cards in a responsive grid
// export function TicketList({ tickets, onSelect }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {tickets.slice(0, 6).map((ticket) => (
//         <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
//       ))}
//     </div>
//   );
// }


