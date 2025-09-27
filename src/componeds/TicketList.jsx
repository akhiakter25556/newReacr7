import { MdDateRange } from "react-icons/md";





import { CalendarDays } from "lucide-react";

export default function TicketCard({ ticket, onSelect }) {
  return (
    <div
      className=" rounded-2xl p-4 shadow hover:shadow-lg 
      transition cursor-pointer flex flex-col justify-between"
    >
      {/* Title */}
      <h3 className="text-lg font-bold mb-2">{ticket.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-700 flex-1">{ticket.description}</p>

      {/* Footer Section */}
      <div className="mt-4 flex items-center justify-between">
        {/* Open Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // card click prevent
            onSelect(ticket);
          }}
          className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm
           hover:bg-blue-700"
        >
          Open
        </button>

        {/* Calendar with date */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <CalendarDays size={16} />
        
          <span>Sarah Johnson {ticket.createdAt}</span>
 <MdDateRange />

        </div>
      </div>
    </div>
  );
}

// ✅ Parent Component to render 10 cards in a grid
export function TicketList({ tickets, onSelect }) {
  console.log(tickets);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {tickets.slice(0, 10).map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
      ))}
    </div>
  );
}
