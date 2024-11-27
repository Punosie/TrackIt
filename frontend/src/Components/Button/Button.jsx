const Button = ({name, icon, onClick, color}) => {
    return (
      <button 
          type="submit"
          className={`${color} text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center space-x-2`}
          onClick={onClick}
      >
          <span className="text-2xl">{icon}</span>
          <span className="text-xl" >{name}</span>
      </button>
    )
  }
  
  export default Button
  

  // className="bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-center space-x-2"