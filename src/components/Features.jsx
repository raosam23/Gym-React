import React from "react";

export default function FeaturesSection() {
  const containerStyle = {
    backgroundColor: "#f2f2f2",
    paddingTop: 100,
    paddingBottom: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 0, // Set marginBottom to 0 to remove the margin
  };

  const contentStyle = {
    margin: "0 -15px",
  };

  return (
    <div className="container-fluid mt-5" style={containerStyle}>
      <div className="container" style={contentStyle}>
        <h2 className="text-center fs-1">FEATURES</h2>
        <div className="row justify-content-center my-4">
          <div className="col">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title fs-2">Weight Lifting</h5>
                <p className="card-text fs-3">Lift Weights like a pro</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title fs-2">Specific Muscle</h5>
                <p className="card-text fs-3">Buff up your muscles</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title fs-2">Flex your muscle</h5>
                <p className="card-text fs-3">Show em guns</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title fs-2">Cardio Exercise</h5>
                <p className="card-text fs-3">Gain some stamina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
