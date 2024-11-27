import SidePanel from "./Components/Sidepanel/SidePanel"
import MainPanel from "./Components/MainPanel/MainPanel.jsx"
import { useState } from "react"
import Dashboard from "./Components/Dashboard/Dashboard.jsx"
import Incomes from "./Components/Incomes/Incomes.jsx"
import Expenses from "./Components/Expenses/Expenses.jsx"
import { useGlobalContext } from "./Context/GlobalContext.jsx"

function App() {
  const [active, setActive] = useState(1)

  const {addIncome} = useGlobalContext()

  // Function to render content based on the 'active' state
  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  return (
    <>
      <div className="h-screen w-screen absolute top-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00020a_1px)] bg-[size:20px_20px]">
        <div className="flex h-screen">
          <SidePanel active={active} setActive={setActive} />
          <MainPanel>
            {displayData()}
          </MainPanel>
        </div>
      </div>
    </>
  )
}

export default App
