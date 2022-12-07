
import Header from "./components/Header/Header";
import Panel from "./components/MainPanel/Panel";
import Sidebar from "./components/Sidebar/Sidebar";
import Subheader from "./components/Subheader/Subheader";


function App() {

    return (
        <div className="App">
            <Sidebar/>
            <main className="ml-[250px] p-4">
                <Header/>
                <Subheader/>
                <hr className="my-4"/>
            </main>
            <Panel/>
        </div>
    );
}

export default App;