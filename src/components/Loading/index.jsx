import React from "react";
import "./style.less"

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loader">
                <span className="ball" style={{ '--i': 1 }}></span>
                <span className="shadow" style={{ '--i': 1 }}></span>
                <span className="ball" style={{ '--i': 2 }}></span>
                <span className="shadow" style={{ '--i': 2 }}></span>
                <span className="ball" style={{ '--i': 3 }}></span>
                <span className="shadow" style={{ '--i': 3 }}></span>
                <span className="ball" style={{ '--i': 4 }}></span>
                <span className="shadow" style={{ '--i': 4 }}></span>
                <span className="ball" style={{ '--i': 5 }}></span>
                <span className="shadow" style={{ '--i': 5 }}></span>
            </div>
        </div>
    )
}

export default Loading