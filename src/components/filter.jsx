import React, { Component } from 'react';
class Filter extends Component {
    render() { 
        return (
            <form className="d-md-flex align-items-end form-group filter-container">
              <div className="flex-fill">
                <label htmlFor="one">Filter By</label>
                <select className="form-control" name="one" id="one">
                  <option></option>
                  <option>1</option>
                </select>
              </div>
              <div className="flex-fill">
                <label htmlFor="two">Start Date</label>
                <input type="date" name="two" className="form-control" />
              </div>
              <div className="flex-fill">
                <label htmlFor="three">End Date</label>
                <input type="date" name="three" className="form-control" />
              </div>
              <div className="flex-fill">
                <label htmlFor="four">Business Unit</label>
                <select className="form-control" name="four" id="four">
                  <option></option>
                  <option>1</option>
                </select>
              </div>
              <div className="flex-fill">
                <label htmlFor="five">Order Type</label>
                <select className="form-control" name="five" id="five">
                  <option></option>
                  <option>1</option>
                </select>
              </div>
              <div className="flex-fill">
                <label htmlFor="six">Regions</label>
                <select className="form-control" name="six" id="six">
                  <option></option>
                  <option>1</option>
                </select>
              </div>
              <div className="flex-fill">
                <button type="submit" className="filter-submit-btn rounded-pill">
                  Apply
                </button>
              </div>
            </form>
        );
    }
}
 
export default Filter;