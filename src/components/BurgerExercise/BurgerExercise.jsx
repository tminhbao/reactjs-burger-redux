import React, { Component } from "react";
import "./BurgerExercise.css";

class BurgerExercise extends Component {
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
            <div className="salad"></div>
            <div className="cheese"></div>
            <div className="beef"></div>
            <div className="breadBottom"></div>
          </div>
          <div className="col-6">
            <h3 className="text-center mt-3 text-success">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <th>Thức ăn</th>
                <th></th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
              </thead>
              <tbody>
                <tr>
                  <td>salad</td>
                  <td>
                    <button className="btn btn-success">+</button>
                    <span>1</span>
                    <button className="btn btn-danger">-</button>
                  </td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>cheese</td>
                  <td>
                    <button className="btn btn-success">+</button>
                    <span>1</span>
                    <button className="btn btn-danger">-</button>
                  </td>
                  <td>20</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>beef</td>
                  <td>
                    <button className="btn btn-success">+</button>
                    <span>1</span>
                    <button className="btn btn-danger">-</button>
                  </td>
                  <td>55</td>
                  <td>55</td>
                </tr>
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

export default BurgerExercise;
