import { useEffect, useState } from 'react'
// import Navbar from "./components/Navbar";

import Banner from './componeds/Banner'
import TicketCard from './componeds/TicketCard'
import TaskStatus from './componeds/TaskStatus'
import Footer from './componeds/Footer'
// import FooterZon from './componeds/FooterZon'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './componeds/navber'
// import TicketCard from './componeds/TicketCard'

export default function App() {
	const [tickets, setTickets] = useState([])
	const [inProgress, setInProgress] = useState([])
	const [resolved, setResolved] = useState([])

	useEffect(() => {
		fetch('/tickets.json')
			.then((res) => res.json())
			.then((data) => {
				setTickets(data)
			})
	}, [])

	const handleSelect = (ticket) => {
		if (!inProgress.find((t) => t.id === ticket.id)) {
			setInProgress([...inProgress, ticket])
			toast.info(`"${ticket.title}" moved to In Progress`)
		}
	}

	const handleComplete = (ticket) => {
		setInProgress(inProgress.filter((t) => t.id !== ticket.id))
		setResolved([...resolved, ticket])
		setTickets(tickets.filter((t) => t.id !== ticket.id))
		toast.success(`"${ticket.title}" marked as Resolved`)
	}

	return (
		<div className='min-h-screen flex flex-col'>
			<Navbar />
			<main className='flex-1 container mx-auto px-6 py-4'>
				<Banner
					inProgressCount={inProgress.length}
					resolvedCount={resolved.length}
				/>
<div>
	<h1 className='text-2xl '>Customer Tickets</h1>
</div>
				<div className='grid md:grid-cols-3 gap-6'>
					{/* Left: Tickets */}
					<div className='md:col-span-2 grid sm:grid-cols-2 gap-4'>
						{tickets.map((ticket) => (
							<TicketCard
								key={ticket.id}
								ticket={ticket}
								onSelect={handleSelect}
							/>
						))}
					</div>

					{/* Right: Task Status */}
					<TaskStatus tasks={inProgress} onComplete={handleComplete} />
				</div>
			</main>
			<Footer />
			<ToastContainer position='top-center' autoClose={2000} />
		</div>
	)
}



// export default function FooterZon() {
//   return (
//     <footer className="bg-gray-900 text-white text-center py-4 mt-10 rounded-t-2xl">
//       <p className="text-sm">
//         © 2025 <span className="font-semibold">Customer Support Zone</span>. All rights reserved.
//       </p>
//     </footer>
//   );
// }


// import { useEffect, useState } from "react";
// import Banner from "./componeds/Banner";
// import TicketCard from "./componeds/TicketCard";
// import TaskStatus from "./componeds/TaskStatus";
// import Footer from "./componeds/Footer";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./componeds/navber";

// export default function App() {
//   const [tickets, setTickets] = useState([]);
//   const [inProgress, setInProgress] = useState([]);
//   const [resolved, setResolved] = useState([]);

//   useEffect(() => {
//     fetch("/tickets.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setTickets(data);
//       });
//   }, []);

//   const handleSelect = (ticket) => {
//     if (!inProgress.find((t) => t.id === ticket.id)) {
//       setInProgress([...inProgress, ticket]);
//       toast.info(`"${ticket.title}" moved to In Progress`);
//     }
//   };

//   const handleComplete = (ticket) => {
//     setInProgress(inProgress.filter((t) => t.id !== ticket.id));
//     setResolved([...resolved, ticket]);
//     setTickets(tickets.filter((t) => t.id !== ticket.id));
//     toast.success(`"${ticket.title}" marked as Resolved`);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <main className="flex-1 container mx-auto px-4 md:px-6 py-4">
//         {/* Banner */}
//         <Banner
//           inProgressCount={inProgress.length}
//           resolvedCount={resolved.length}
//         />

//         {/* Heading */}
//         <div className="my-4">
//           <h1 className="text-xl md:text-2xl font-semibold">
//             Customer Tickets
//           </h1>
//         </div>

//         {/* Tickets + Task Status */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Left: Tickets */}
//           <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {tickets.map((ticket) => (
//               <TicketCard
//                 key={ticket.id}
//                 ticket={ticket}
//                 onSelect={handleSelect}
//               />
//             ))}
//           </div>

//           {/* Right: Task Status */}
//           <TaskStatus tasks={inProgress} onComplete={handleComplete} />
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />

//       {/* Toasts */}
//       <ToastContainer position="top-center" autoClose={2000} />
//     </div>
//   );
// }

