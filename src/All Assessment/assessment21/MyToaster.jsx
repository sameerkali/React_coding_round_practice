import React from "react";
import GoToHome from "../../Components/GoToHome";

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
      <GoToHome />
      <h1>Toaster By sameerkali</h1>
      <button style={{ backgroundColor: "#ccc" }} onClick={handleClick}>
        Click Me To Show Toaster
      </button>
    </div>
  );
};

export default MyToaster;

const Toast = ({ close, time = 6 }) => {
  const [count, setCount] = React.useState(time);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(intervalId);
          close();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [close]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "10px",
        backgroundColor: "red",
      }}
    >
      <h1>I am a sweet Toast</h1>
      <h1>{count}</h1>
      <button style={{ fontSize: "3rem", backgroundColor: "transparent" }} onClick={close}>
        x
      </button>
    </div>
  );
};

