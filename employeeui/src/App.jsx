import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeEdit from "./components/EmployeeEdit";

function App() {
  const [editId, setEditId] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const reload = () => setReloadKey(prev => prev + 1);

  return (
    <div>
      <EmployeeForm onSuccess={reload} />

      {editId && (
        <EmployeeEdit
          employeeId={editId}
          onCancel={() => setEditId(null)}
          onSuccess={() => {
            setEditId(null);
            reload();
          }}
        />
      )}

      <EmployeeList
        key={reloadKey}
        onEdit={setEditId}
      />
    </div>
  );
}

export default App;