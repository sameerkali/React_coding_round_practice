import React from "react";

const MyToaster = () => {
  const [toast, setToast] = React.useState([]);
  console.log("toast:", toast);

  const handleClick = () => {
    const newToast = { id: Date.now() };
    setToast(prev => [...prev, newToast]);
    setTimeout(() => {
      removeToast(newToast.id);
    }, 6000);
  };

  const removeToast = id => {
    setToast(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="App">
      <div style={{ position: "fixed", top: "10px", right: "20px" }}>
        {toast.map((t, index) =>
          <div key={t.id} style={{ marginTop: `${index * 60}px` }}>
            <Toast close={() => removeToast(t.id)} />
          </div>
        )}
      </div>
      <h1>Hello React.</h1>
      <button onClick={handleClick}>Click Me To Show Toaster</button>
    </div>
  );
};

export default MyToaster;

const Toast = ({ close }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        backgroundColor: "white",
        padding: "10px",
        backgroundColor: "red"
      }}
    >
      <h1>I am a sweet Toast</h1>
      <button
        style={{ fontSize: "3rem", backgroundColor: "transparent" }}
        onClick={close}
      >
        x
      </button>
    </div>
  );
};