import React, { Component } from 'react';
class Table extends Component {
    render() { 
        return (
            <div className="table-responsive col-lg-7 table-container">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>BU</th>
                      <th>Region</th>
                      <th>Booked Value</th>
                      <th>Net Sales Billed</th>
                      <th>Vendor Poc</th>
                      <th>Resale Total</th>
                      <th>Raw GP</th>
                      <th>Net GP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GD</td>
                      <td>North</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>South</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>West</td>
                      <td>3867.03</td>
                      <td>74.55</td>
                      <td>288287.09</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Online</td>
                      <td>20</td>
                      <td>74.55</td>
                      <td>1491</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr className="tbe-border-top">
                      <td>FD</td>
                      <td>North</td>
                      <td>-</td>
                      <td>-</td>
                      <td>0.517%</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>South</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>West</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr className="tbe-border-top">
                      <td>Lighting</td>
                      <td>North</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>South</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>West</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="tbe-foot-border-top">
                      <td>Total</td>
                      <td>All India</td>
                      <td>5867.03</td>
                      <td>149.1</td>
                      <td>149.1</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tfoot>
                </table>
            </div>
        );
    }
}
 
export default Table;