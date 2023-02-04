import React from "react";

const Index = () => {
  return (
    <>
      <div className="center">
        <div>Список треков</div>
        <h5>здесь собраны лучшие треки</h5>
      </div>
      <style jsx>{`
        .center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Index;
