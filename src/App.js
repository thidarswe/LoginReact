import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="column">
          Customer
          <div>
            <select className="combo_customer">
              <option value="0">Small(1em 13px)</option>
            </select>
          </div>
        </div>
        <div className="column_currency">
          Currency
          <div>
            <select className="combo_currency">
              <option value="0">JPY</option>
            </select>
          </div>
        </div>
        <div className="column_email">
          Email<br/>
          <input type="text" className="email" placeholder="Small(1em 13px)"/>
        </div>
        <div className="column_person">
          Person in charge
          <input type="text" className="person" placeholder="Small(1em 13px)"/>
        </div>
        <div className="column">
          Project
          <div>
            <select className="combo_project">
              <option value="0">CRMotion</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column_bill">
        Billing Address
        <input type="text" className="bill"/>
        </div>
        <div className="column_term">
        Terms
        <div>
          <select className="combo_terms">
            <option value="0">Net 30</option>
          </select>
        </div>
        Subject(Optional)<br></br>
        <input type="text" className="subject" placeholder="Submect is here.."/>
        </div>
        <div className="column_invoice">
        Invoice date<br></br>
        <input type="text" className="date" placeholder="01-Feb-2019"/>
        <i class="fa fa-calendar" aria-hidden="true"></i>
        </div>
        <div className="column_due">
        Due date<br></br>
        <input type="text" className="date" placeholder="01-Feb-2019"/>
        <i class="fa fa-calendar" aria-hidden="true"></i>
        </div>
      </div>
      <div>
        <table className="table_product">
          <tr>
            <th className="No"></th>
            <th className="product">Product/Service</th>
            <th className="discription">Discription</th>
            <th className="price">Price</th>
            <th className="qty">Qty</th>
            <th className="tax">Tax</th>
            <th className="amount">Amount</th>
          </tr>
          <tr>
            <td>1</td>
            <td>CRMotion</td>
            <td>May 2019 labofee</td>
            <td className="td_price">JPY 1,200,000</td>
            <td className="td_qty">1</td>
            <td></td>
            <td className="td_amount">JPY 1,200,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td colspan="6"></td>
          </tr>
        </table>
        <div className="row">
          <div className="column_note">
            <button type="text" className="btn_action">Add lines</button><br/>
            Note<br/>
            <input type="text" className="note"/>
          </div>
          <div className="column_total">
            <table className="table_total">
              <tr>
                <td>Total</td><td>1,200,000</td>
              </tr>
              <tr>
                <td>Discount</td><td>10,000</td>
              </tr>
              <tr>
                <td>Taxabel</td><td>1,200,000</td>
              </tr>
              <tr>
                <td>Tax</td><td>60,000</td>
              </tr>
              <tr>
              <td>Ground Total</td>
              <td>JPY1,260,000</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <button type="button" className="btn_save">Save</button>
    </div>
  );
}

export default App;
