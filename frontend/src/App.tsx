import NavBar from 'components/navbar';
import React from 'react';
import Footer from 'components/footer'; 
import DataTable from 'components/DataTable';
function App() {
  return (
    <>
    <NavBar />
    <div>
      <div className="container">
      <h1 className="text-primary">Oi!</h1>
      <DataTable />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
