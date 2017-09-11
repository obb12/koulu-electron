'use babel';

import React from 'react';
import axios from 'axios';
export default class App extends React.Component {
	constructor() {
  super();
  this.tick = this.tick.bind(this);

  this.state = {
  btc:'',
  eth:'',
  xrp:'',
  btcInvestment:'',
  btcPrice:'',
  btcUnits: '',
  btcEquity:'',
  ethInvestment:'',
  ethPrice:'',
  ethUnits:'',
  ethEquity:'',
  xrpInvestment:'',
  xrpPrice:'',
  xrpUnits:'',
  xrpEquity:'',
  ltcInvestment:'',
  ltcPrice:'',
  ltcUnits:'',
  ltcEquity:'',
  };

		}

        componentDidMount() {



			this.timer = setInterval(this.tick,5000);
			}
			tick(){

      console.log(this.state);
			this.serverRequest =
				axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
        console.log(response);
            this.setState({

                btc: response.data.bpi.USD.rate_float

            });
        })

				this.serverRequest2 =
				axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
        .then((response) => {
        console.log(response);
        this.setState({
        eth: response.data.USD
        });
				})
				this.serverRequest3 =
				axios.get("https://www.bitstamp.net/api/v2/ticker/xrpusd")

        .then((response) => {
        console.log(response);
        this.setState({
        xrp: response.data.last
        });
        })
				}
				change(event){
				this.setState({
					btcInvestment:event.target.value
				});
				}
					change2(event){
				this.setState({
					btcPrice:event.target.value
				});
				}
					change3(event){
				this.setState({
					ethInvestment:event.target.value
				});
				}
					change4(event){
				this.setState({
					ethPrice:event.target.value
				});
				}
					change5(event){
				this.setState({
					xrpInvestment:event.target.value
				});
				}
					change6(event){
				this.setState({
					xrpPrice:event.target.value
				});
				}
					change7(event){
				this.setState({
					ltcInvestment:event.target.value
				});
				}
					change8(event){
				this.setState({
					ltcPrice:event.target.value
				});
				}
		render() {

		var btcUnits = Math.round(this.state.btcInvestment / this.state.btcPrice * 100) /100;
		var btcEquity = btcUnits * this.state.btc;
		var ethUnits = Math.round(this.state.ethInvestment / this.state.ethPrice * 100) /100;
		var ethEquity = ethUnits * this.state.eth;
		var xrpUnits = Math.floor(this.state.xrpInvestment / this.state.xrpPrice * 100) /100;
		var xrpEquity = xrpUnits * this.state.xrp;
		var lossBTC= <div className="text-success"><strong>{Math.round(btcUnits * this.state.btc *100) / 100}</strong></div>;
		  if (btcEquity < this.state.btcInvestment) {
lossBTC = <div className="text-danger"><strong>{Math.round(btcUnits * this.state.btc *100) / 100}</strong></div>;
	}
		var lossEth= <div className="text-success"><strong>{Math.round(ethUnits * this.state.eth *100) / 100}</strong></div>;
		  if (ethEquity < this.state.ethInvestment) {
lossEth = <div className="text-danger"><strong>{Math.round(ethUnits * this.state.eth *100) / 100}</strong></div>;
  }
		var lossXRP= <div className="text-success"><strong>{Math.round(xrpUnits * this.state.xrp *100) / 100}</strong></div>;
		  if (xrpEquity < this.state.xrpInvestment) {
lossXRP = <div className="text-danger"><strong>{Math.round(xrpUnits * this.state.xrp *100) / 100}</strong></div>;
  }
	var btcprof= btcEquity - this.state.btcInvestment;
		var profitBTC= <div className="text-success"><strong>{Math.round(btcprof * 100) /100}</strong></div>;
		  if (btcprof < 0) {
profitBTC = <div className="text-danger"><strong>{Math.round(ethprof * 100) /100}</strong></div>;
	}
	var ethprof = ethEquity - this.state.ethInvestment;
        var profitETH= <div className="text-success"><strong>{Math.round(ethprof * 100) /100}</strong></div>;
		  if (ethprof < 0) {
profitETH = <div className="text-danger"><strong>{Math.round(ethprof * 100) /100}</strong></div>;
	}
	var xrpprof = xrpEquity - this.state.xrpInvestment;
		var profitXRP= <div className="text-success"><strong>{Math.round(xrpprof * 100) /100}</strong></div>;
		  if (xrpprof < 0) {
profitXRP = <div className="text-danger"><strong>{Math.round(xrpprof * 100) /100}</strong></div>;
	} console.log(this.state);
		return (
            <div className="container">
  <table className="table table-responsive table-striped">
    <thead>
      <tr>
        <th>Cryptocurrency</th>
        <th>Investment</th>
		<th>Price per unit</th>
		<th>Units</th>
        <th>Current value</th>
		<th>Equity</th>
		<th>P/L</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{color:'#ffcc00'}}><strong>BTC</strong></td>
        <td><input placeholder="Your investment" onChange={this.change}/></td>
		<td><input placeholder="Open price" onChange={this.change2} /></td>
		<td>{btcUnits}</td>
        <td>{this.state.btc}</td>
		<td>{lossBTC}</td>
		<td>{profitBTC}</td>
      </tr>
      <tr>
        <td style={{color:'#839CA5'}}><strong>ETH</strong></td>
        <td><input placeholder="Your investment" onChange={this.change3}/></td>
		<td><input placeholder="Open price" onChange={this.change4}/></td>
		<td>{ethUnits}</td>
        <td>{this.state.eth}</td>
		<td>{lossEth}</td>
		<td>{profitETH}</td>
      </tr>
      <tr>
        <td style={{color:'#3366ff'}}><strong>XRP</strong></td>
        <td><input placeholder="Your investment" onChange={this.change5}/></td>
		<td><input placeholder="Open price" onChange={this.change6}/></td>
		<td>{xrpUnits}</td>
        <td>{this.state.xrp}</td>
		<td>{lossXRP}</td>
		<td>{profitXRP}</td>
      </tr>
	  <tr>
        <td style={{color:'#c0c0c0'}}><strong>LTC</strong></td>
        <td><input placeholder="Your investment" onChange={this.change7}/></td>
		<td><input placeholder="Open price" onChange={this.change8}/></td>
		<td></td>
        <td></td>
		<td></td>
		<td></td>
      </tr>
    </tbody>
  </table>
</div>
          )
        }
      }
