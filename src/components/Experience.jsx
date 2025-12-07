export default function Experience() {
    return (
      <section id="experience">
        <h2 className="text-xl font-semibold mb-6">experience</h2>
  
        <div className="grid md:grid-cols-2 gap-6">
          {/* EXPERIENCE CARD */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            
            {/* Logo */}
            <div className="mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
                alt="Company Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
  
            {/* Role */}
            <p className="text-sm font-medium text-gray-700 mb-1">Full-time</p>
            <h3 className="text-lg font-semibold mb-1">Frontend Developer</h3>
  
            {/* Timeline */}
            <p className="text-sm text-gray-500 mb-4">Sept 2023 – Present</p>
  
            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Building user-friendly, scalable UI applications using React, Angular, and modern
              JavaScript tools. Improving performance, designing components, and delivering clean,
              maintainable code.
            </p>
          </div>
        </div>
      </section>
    );
  }
  