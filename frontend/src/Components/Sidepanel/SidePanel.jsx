import { signout } from "../../Utils/icons";
import { MenuItems } from "../../Utils/MenuItems";

const SidePanel = ({active, setActive}) => {
  
    return (
      <div className="bg-black/30 rounded-lg shadow-lg text-white h-5/6 w-2/12 ms-12 mt-20 flex flex-col justify-between items-center border border-white/20">
        <div className="container text-center pt-5">
          <img src="/Img/Avatar.png" alt="Avatar" className="h-fit w-1/3 rounded-full pt-10 mx-auto"/>
          <div className="userInfo mt-4">
          <h2 className="text-3xl font-semibold">Shubhankar</h2>
          <p className="text-xl text-gray-600">Your Money</p>
        </div>
        </div>
        <ul className="Menu mt-10 space-y-4 flex flex-col justify-between items-start">
          {MenuItems.map((item) => {
            return (
              <li 
                key={item.id} 
                onClick={() => setActive(item.id)}
                // className="flex items-center p-2 hover:bg-purple-900 rounded-lg cursor-pointer w-full"
                className={`flex border-l-4 border-transparent items-center p-2 rounded-lg cursor-pointer w-full 
                ${active === item.id ? 'bg-purple-900' : ''} 
                hover:border-l-4 hover:border-purple-900`}
              >
                <span className="text-3xl mx-4">{item.icon}</span>
                <span className="text-2xl ">{item.title}</span>
              </li>
            );
          })}
        </ul>
        <div className="bottom-nav mt-auto w-full">
          <ul className="w-full px-4">
            <li className="flex items-center p-2 mb-4 hover:bg-purple-900 rounded-lg cursor-pointer w-full justify-start">
              <span className="text-3xl mr-4">{signout}</span>
              <span className="text-2xl">Sign Out</span>
            </li>
          </ul>
        </div>  
      </div>
    );
  };
  
  export default SidePanel;
  