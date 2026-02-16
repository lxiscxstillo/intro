export default function Card() {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Card Image */}
      <img 
        src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
        alt="Red Heaven"
        className="w-full h-48 object-cover"
      />
      
      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Red Heaven
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! 
          Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            #tailwind
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            #frontendseverything
          </button>
        </div>
      </div>
    </div>
  );
}