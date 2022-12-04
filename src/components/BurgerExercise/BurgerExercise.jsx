import React, { Component } from "react";
import "./BurgerExercise.css";
import { connect } from "react-redux";

class BurgerExercise extends Component {
  renderBurger = () => {
    let { burger } = this.props;
    return Object.entries(burger).map(([propBurger, valueBurger], index) => {
      let breadMid = [];
      for (let i = 0; i < valueBurger; i++) {
        breadMid.push(<div key={i} className={propBurger}></div>);
      }
      return breadMid;
    });
  };
  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propMenu, valueMenu], index) => {
      return (
        <tr key={index}>
          <td>{propMenu}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => this.changeQuantity(propMenu, 1)}
            >
              +
            </button>
            <span>{burger[propMenu]}</span>
            <button
              className="btn btn-danger"
              onClick={() => this.changeQuantity(propMenu, -1)}
            >
              -
            </button>
          </td>
          <td>{valueMenu}</td>
          <td>{valueMenu * burger[propMenu]}</td>
        </tr>
      );
    });
  };
  changeQuantity = (key, value) => {
    this.props.dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        key,
        value,
      },
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="text-center mt-3">BÀI TẬP BURGER</h3>
        </div>
        <div className="row">
          <div className="col-6">
            <h2 className="text-center mt-3 text-success">
              Bài tập burger cybersoft
            </h2>
            <h4 className="text-center mt-3 text-danger">
              Bánh burger của bạn
            </h4>
            <div className="breadTop"></div>
            {this.renderBurger()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-6">
            <h3 className="text-center mt-3 text-success">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {this.renderMenu()}
                <tr>
                  <td></td>
                  <td></td>
                  <td>Tổng cộng</td>
                  <td>85</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger,
  menu: state.burgerReducer.menu,
});

export default connect(mapStateToProps)(BurgerExercise);
