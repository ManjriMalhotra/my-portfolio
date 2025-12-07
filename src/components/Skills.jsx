const skills = [
    "typescript", "react.js", "angular", "firebase",
    "GCP", "ionic", "ngrx", "redux toolkit", "restful apis",
    "single spa", "capacitor", "cordova", "nosql",
    "git", "xcode", "android studio", "rxjs"
  ];

  export default function Skills() {
    return (
      <section id="skills">
        <h2 className="text-xl font-semibold mb-4">skills</h2>
  
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm border border-gray-300 rounded-full 
                         hover:bg-gray-100 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }