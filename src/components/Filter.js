import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4"> 
                    <b> {this.props.count} products found... </b>
                </div>
                <div className="col-md-4">
                    <label> 
                        <b> Order by </b>
                        <select className="form-control" value={this.props.sort} onChange={this.props.handleChangeSort}>
                            <option value=""> Select </option>
                            <option value="highest"> Lowest to highest </option>
                            <option value="lowest"> Highest to lowest </option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                <label> 
                        <b> Filter by Size </b>
                        <select className="form-control" value={this.props.size} onChange={this.props.handleChangeSize}>
                            <option value=""> All </option>
                            <option value="S"> S </option>
                            <option value="M"> M </option>
                            <option value="L"> L </option>
                            <option value="XS"> XS </option>
                            <option value="XL"> XL </option>
                            <option value="XXL"> XXL </option>
                            
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}

export default Filter
