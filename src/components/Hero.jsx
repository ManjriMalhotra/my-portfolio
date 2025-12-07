
export default function Hero() {
    return (
      <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
        <img
          src="../assets/profile_img.png"
          alt="profile"
          className="w-48 h-48 object-cover rounded-md mb-6 grayscale"
        />
  
        <h1 className="text-5xl font-semibold font-serif">manjri</h1>
  
        <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xs">
          i enjoy building things with 
          <span className="bg-blue-100 px-1 rounded"> software </span>
          especially for the web
        </p>
      </div>
    );
  }
  