export default function TaskStatus({ tasks, onComplete }) {
  console.log(tasks);
  
  return (
    
    <div className=" rounded-lg p-4 bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Task Status</h2>
      <p className="text-gray-400">Select a ticket to add to Task Status</p>
      {tasks.length === 0 && <p>No tasks in progress.</p>}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center border-b py-2"
        >
          <span>
            
                <h1 className="text-xl font-semibold mb-4">    Resolved Task</h1>
                <p className="text-gray-400">No resolved tasks yet.</p>
            {task.title} <br />
        
          </span>
          <button
            onClick={() => onComplete(task)}
            className="bg-green-600 text-white px-3 py-1 rounded-lg"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
}


// export default function TaskStatus({ tasks, onComplete }) {
//   console.log(tasks);

//   return (
//     <div className="rounded-lg p-4 bg-gray-50">
//       <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
//         Task Status
//       </h2>
//       <p className="text-gray-400 mb-3">
//         Select a ticket to add to Task Status
//       </p>

//       {/* যদি কোনো task না থাকে */}
//       {tasks.length === 0 && <p className="text-sm">No tasks in progress.</p>}

//       {tasks.map((task) => (
//         <div
//           key={task.id}
//           className="flex flex-col sm:flex-row justify-between sm:items-center 
//                      border-b py-3 gap-2 sm:gap-0"
//         >
//           {/* Left Side */}
//           <div>
//             <h3 className="text-base md:text-lg font-semibold">Resolved Task</h3>
//             <p className="text-gray-400 text-sm">No resolved tasks yet.</p>

//             <span className="block text-sm md:text-base font-medium mt-1">
//               {task.title}
//             </span>
//           </div>

//           {/* Right Side (Button) */}
//           <button
//             onClick={() => onComplete(task)}
//             className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm md:text-base
//                        hover:bg-green-700 transition w-full sm:w-auto"
//           >
//             Complete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
