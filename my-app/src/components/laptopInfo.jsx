import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./laptopInfo.css";

const LaptopInfo = () => {
  return (
    <div className="main-container">
      <div className="header-block">
        <p>ლეპტოპის ინფო</p>
      </div>
      <div className="list-block">
        <div className="first-section-block">
          <img />
          <div>
            <table>
              <tr>
                <td>სახელი:</td>
                <td>აკაკი წერეთელი</td>
              </tr>
              <tr>
                <td>თიმი:</td>
                <td>დიზაინერები</td>
              </tr>
              <tr>
                <td>პოზიცია:</td>
                <td>ილუსტრატორი</td>
              </tr>
              <tr>
                <td>მაილი:</td>
                <td>ako@redberry.ge</td>
              </tr>
              <tr>
                <td>ტელ ნომერი:</td>
                <td>+995 567 12 34 56</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="section-2">
          <div className="sec-table-block">
            <table className="left-table">
              <tr>
                <td>ლეპტოპის სახელი:</td>
                <td>razor bla bla</td>
              </tr>
              <tr>
                <td>ლეპტოპის ბრენდი:</td>
                <td>HP</td>
              </tr>
              <tr>
                <td>RAM:</td>
                <td>16</td>
              </tr>
              <tr>
                <td>მეხსიერების ტიპი:</td>
                <td>SSD</td>
              </tr>
            </table>
            <table className="right-table">
              <tr>
                <td>CPU:</td>
                <td>intel 5</td>
              </tr>
              <tr>
                <td>CPU-ს ბირთვი:</td>
                <td>13</td>
              </tr>
              <tr>
                <td>CPU-ს ნაკადი:</td>
                <td>24</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopInfo;
