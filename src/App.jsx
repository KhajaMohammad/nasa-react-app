import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";
import { useEffect, useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchApiData() {
      const NASA_KEY = import.meta.env.VITE_APP_NASA_API_KEY;
      console.log("NASA_KEY\n", NASA_KEY);

      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      try {
        const response = await fetch(url);
        const apidata = await response.json();
        setData(apidata);
        console.log("DATA\n", apidata);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchApiData();
  }, []);

  function handleToggleModal() {
    console.log("clicked");

    setShowModal((prev) => !prev);
  }
  return (
    <>

      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          {" "}
          <i className="fa-solid fa-gear"></i>{" "}
        </div>
      )}

      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
