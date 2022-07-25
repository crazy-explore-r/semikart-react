import './App.css';
import Topnav from './components/topNav';
import Leftbar from './components/leftSidebar';
import Filter from './components/filter';
import Table from './components/table';
import BarChart from './components/chart';

function App() {
  return (
    <div className="container-fluid p-0">

      <Topnav />

      <div className="container-fluid p-0">

        <Leftbar />

        <div className="container-fluid main-container">

          <h2 className="main-heading font-medium">Sales Dashboard</h2>

          <div className="main-content container-fluid p-0">

            <Filter />

            <div className="row chr-tbe-container">

              <div className="col-lg-5 chart-container">
                <BarChart />
              </div>

              <Table />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
