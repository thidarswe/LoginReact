import React from 'react';
import ReactDOM from 'react-dom';
import './Sales.css'

class Sales extends React.Component {
  render(){
    return(
      <div id="sales">
      <div id="up"><label>Sales List</label><button>+ Receipt</button><button>+ Invoice</button></div>
      <div class="salebody">
      <div className="row">
        <div className="column">
        <p> Invoice date</p>
        <input type="type" placeholder="01-Feb-2019"/><label id="to">To</label><input type="type" placeholder="01-Feb-2019"/>
        </div>
        <div className="column">
          <p> Invoice date</p>
          <input type="type" placeholder="01-Feb-2019"/><label id="to">To</label><input type="type" placeholder="01-Feb-2019"/>
        </div>
        <div className="column" id="two">
          <p>Invoice date</p>
          <div><select><option></option><option>A</option><option>B</option></select></div>
        </div>
        <div className="column" id="two">
          <p>Invoice date</p>
          <div><select><option>All</option><option>A</option><option>B</option></select></div>
        </div>
        <div className="column">
        <i class="fas fa-download"></i>
        </div>
      </div>
      <table>
      <tr><th>No</th><th>Customer</th><th>Type</th><th>Title</th><th>Date</th><th>Due Date</th><th>Status</th><th>Total</th><th id="action">Action</th></tr>
      <tr><td>10001</td><td>GNEXT japan</td><td>Invoice</td><td>Outsourcing fee</td><td>01/08/2018</td><td>01/02/2019</td><td id="overdue">Overdue</td><td>USD 100,000</td><td></td></tr>
      <tr><td>10001</td><td>GNEXT japan</td><td>Invoice</td><td>Outsourcing fee</td><td>01/08/2018</td><td>01/02/2019</td><td id="open">Open</td><td>USD 100,000</td><td></td></tr>
      <tr><td>10001</td><td>GNEXT japan</td><td>Invoice</td><td>Outsourcing fee</td><td>01/08/2018</td><td>01/02/2019</td><td id="open">Open</td><td>USD 100,000</td><td></td></tr>
      <tr><td>10001</td><td>GNEXT japan</td><td>Invoice</td><td>Outsourcing fee</td><td>01/08/2018</td><td>01/02/2019</td><td id="open">Open</td><td>USD 100,000</td><td></td></tr>
      <tr><td>10001</td><td>GNEXT japan</td><td>Invoice</td><td>Outsourcing fee</td><td>01/08/2018</td><td>01/02/2019</td><td id="open">Open</td><td>USD 100,000</td><td></td></tr>
      </table>
      <p id="show_message">Showing 1 to 3 of 10 entries</p>
      </div>
      </div>
    );
  }
}
export default Sales;
