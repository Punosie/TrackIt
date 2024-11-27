// MainPanel.jsx
const MainPanel = ({ children }) => {
  return (
    <div className="bg-black/30 rounded-lg shadow-lg text-white h-5/6 w-9/12 mt-20 ms-12 flex flex-col justify-start items-center border border-white/20 overflow-y-auto">
      {/* Render the dynamic content passed as children */}
      {children}
    </div>
  );
};

export default MainPanel;
