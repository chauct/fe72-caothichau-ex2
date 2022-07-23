import React, { Component } from "react";

import model from "../assets/img/model.jpg";
import v1 from "../assets/img/v1.png";
import v2 from "../assets/img/v2.png";
import v3 from "../assets/img/v3.png";
import v4 from "../assets/img/v4.png";
import v5 from "../assets/img/v5.png";
import v6 from "../assets/img/v6.png";
import v7 from "../assets/img/v7.png";
import v8 from "../assets/img/v8.png";
import v9 from "../assets/img/v9.png";

import "./style.css";

import data from "../assets/dataGlasses.json";
// console.log(data[0]);

export class Home extends Component {
  state = {
    glassesImg: v1,
    selectedProduct: data[0],
  };
  selectProduct = (item) => {
    this.setState({
      selectedProduct: item,
    });
  };
  changeGlasses = (img) => {
    this.setState({
      glassesImg: img,
    });
  };

  renderProducts = () => {
    const productHTML = data.map((item) => {
      return (
        <div key={item.id} className="info">
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
          <p>{item.desc}</p>
        </div>
      );
    });
    return productHTML;
  };
  render() {
    return (
      <div className="container">
        <div className="row  mt-5">
          <div className="col-6 left">
            <h2>Try classes app online</h2>
            <div>
              <img onClick={() => this.changeGlasses(v1)} src={v1} alt />
            </div>
            <div>
              <img onClick={() => this.changeGlasses(v2)} src={v2} alt />
            </div>
            <div>
              <img onClick={() => this.changeGlasses(v3)} src={v3} alt />
            </div>
            <div>
              <img onClick={() => this.changeGlasses(v4)} src={v4} alt />
            </div>
            <div>
              <img onClick={() => this.changeGlasses(v5)} src={v5} alt />
            </div>
            <div>
              <img onClick={() => this.changeGlasses(v6)} src={v6} alt />
            </div>
            <div>
              <img onClick={() => this.changeGlasses(v7)} src={v7} alt />
            </div>
            <div>
              <img onClick={() => this.changeGlasses(v8)} src={v8} alt />
            </div>
            <div>
              <img onClick={() => this.changeGlasses(v9)} src={v9} alt />
            </div>
          </div>
          <div className="offset-1 col-5 right">
            <img src={this.state.glassesImg} alt />
            {this.renderProducts()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
