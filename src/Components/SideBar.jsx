export default function SideBar(props) {
  const { data, handleToggleModal } = props;
  return (
    <>
      <div className="sidebar">
        <div className="bgOverlay"></div>
        <div className="sidebarcontents">
          <h2>{data?.title}</h2>
          <div>
            {data ? <p>{data?.date}</p> : <p>Loading...</p>}
            <p>{data?.explanation}</p>
          </div>
          <button onClick={handleToggleModal}>
            <i className="fa-solid fa-right-long"></i>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
