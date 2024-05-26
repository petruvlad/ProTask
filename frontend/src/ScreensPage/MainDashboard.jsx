import { useState } from 'react';
import Column from '../ScreensPage/Colum';

const MainDashboard = () => {
  // Starea pentru coloanele dashboard-ului
  const [columns, setColumns] = useState([]);

  // Funcția pentru adăugarea unei noi coloane
  const addColumn = () => {
    const newColumn = {
      id: columns.length + 1, // Generăm un ID unic pentru noua coloană
      title: `Column ${columns.length + 1}`,
      cards: [] // Inițializăm lista de cărți goală pentru noua coloană
    };
    setColumns([...columns, newColumn]);
  };

  return (
    <div className="main-dashboard">
      <button onClick={addColumn}>Add Column</button>
      <div className="columns">
        {/* Afișăm fiecare coloană din starea componentei */}
        {columns.map(column => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
};

export default MainDashboard;
