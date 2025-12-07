// import { useEffect, useRef } from "react";
// import GitHubCalendar from "github-calendar";

// export default function Contributions() {
//   const calendarRef = useRef(null);

//   useEffect(() => {
//     GitHubCalendar(calendarRef.current, "Manjri Malhotra", {
//       responsive: true,
//     });
//   }, []);

//   return (
//     <section id="contributions">
//       <h2 className="text-xl font-semibold mb-6">contributions</h2>

//       <div
//         ref={calendarRef}
//         className="p-4 border border-gray-200 rounded-xl shadow-sm"
//       ></div>
//     </section>
//   );
// }


import {GitHubCalendar} from "react-github-calendar";

export default function Contributions() {
  const username = "ManjriMalhotra"; // <-- your GitHub username

  return (
    <section id="contributions">
      <h2 className="text-xl font-semibold mb-6">contributions</h2>

      <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
        <GitHubCalendar
          username={username}
          blockSize={12}
          blockMargin={5}
          fontSize={14}
        />
      </div>
    </section>
  );
}
