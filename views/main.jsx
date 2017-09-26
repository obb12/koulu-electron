'use babel';

import React from 'react';
import axios from 'axios';
export default class App extends React.Component {
	constructor() {
  super();
  this.tick = this.tick.bind(this);
  this.change = this.change.bind(this);
  this.change2 = this.change2.bind(this);
  this.change3 = this.change3.bind(this);
  this.change4 = this.change4.bind(this);
  this.change5 = this.change5.bind(this);
  this.change6 = this.change6.bind(this);
  this.change7 = this.change7.bind(this);
  this.change8 = this.change8.bind(this);
  this.state = {
  btc:'',
  eth:'',
  xrp:'',
  bch:'',
  btcInvestment:window.localStorage.btcInvestment,
  btcPrice:window.localStorage.btcPrice,
  btcUnits: '',
  btcEquity:'',
  ethInvestment:window.localStorage.ethInvestment,
  ethPrice:window.localStorage.ethPrice,
  ethUnits:'',
  ethEquity:'',
  xrpInvestment:window.localStorage.xrpInvestment,
  xrpPrice:window.localStorage.xrpPrice,
  xrpUnits:'',
  xrpEquity:'',
  ltcInvestment:'',
  ltcPrice:'',
  ltcUnits:'',
  ltcEquity:'',
  totalEquity:'',
  totalProfit:'',
  bchInvestment:window.localStorage.bchInvestment,
  bchPrice:window.localStorage.bchPrice,
  bchUnits:'',
  bchEquity:'',
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
            this.setState({

                btc: response.data.bpi.USD.rate_float

            });
        })

				this.serverRequest2 =
				axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
        .then((response) => {
        this.setState({
        eth: response.data.USD
        });
				})
				this.serverRequest3 =
				axios.get("https://www.bitstamp.net/api/v2/ticker/xrpusd")

        .then((response) => {
        this.setState({
        xrp: response.data.last
        });
        })
		this.serverRequest4 =
				axios.get("https://api.coinmarketcap.com/v1/ticker/")

        .then((response) => {
        this.setState({
        bch: response.data[2].price_usd
        });
        })

				}
				change(event){
				this.setState({
					btcInvestment:event.target.value
				});
				// Store
				localStorage.setItem("btcInvestment", event.target.value);
				}
					change2(event){
				this.setState({
					btcPrice:event.target.value
				});
				localStorage.setItem("btcPrice", event.target.value);
				}
					change3(event){
				this.setState({
					ethInvestment:event.target.value
				});
				localStorage.setItem("ethInvestment", event.target.value);
				}
					change4(event){
				this.setState({
					ethPrice:event.target.value
				});
				localStorage.setItem("ethPrice",event.target.value);
				}
					change5(event){
				this.setState({
					xrpInvestment:event.target.value
				});
				localStorage.setItem("xrpInvestment", event.target.value);
				}
					change6(event){
				this.setState({
					xrpPrice:event.target.value
				});
				localStorage.setItem("xrpPrice", event.target.value);
				}
					change7(event){
				this.setState({
					bchInvestment:event.target.value
				});
				localStorage.setItem("bchInvestment", event.target.value);
				}
					change8(event){
				this.setState({
					bchPrice:event.target.value
				});
				localStorage.setItem("bchPrice", event.target.value);
				}
		render() {
		var totalInvestment = this.state.btcInvestment*1 + this.state.ethInvestment*1 + this.state.xrpInvestment*1;
		var btcUnits = Math.round(this.state.btcInvestment / this.state.btcPrice * 100) /100 ? Math.round(this.state.btcInvestment / this.state.btcPrice * 100) /100 : 0;
		var btcEquity = btcUnits * this.state.btc;
		var ethUnits = Math.round(this.state.ethInvestment / this.state.ethPrice * 100) /100 ? Math.round(this.state.ethInvestment / this.state.ethPrice * 100) /100 : 0;
		var ethEquity = ethUnits * this.state.eth;
		var xrpUnits = Math.floor(this.state.xrpInvestment / this.state.xrpPrice * 100) /100 ? Math.round(this.state.xrpInvestment / this.state.xrpPrice * 100) /100 : 0;
		var xrpEquity = xrpUnits * this.state.xrp;
		var bchUnits = Math.round(this.state.bchInvestment / this.state.bchPrice * 100) /100 ? Math.round(this.state.bchInvestment / this.state.bchPrice * 100) /100 : 0;
		var bchEquity = bchUnits * this.state.bch;
		var totalEquityValue = btcEquity + ethEquity + xrpEquity + bchEquity;
		var totalEquity = <div className="text-success"><strong>{Math.floor(totalEquityValue* 100) /100}</strong></div>;
			if (totalEquity < totalInvestment) {
				var totalEquity = <div className="text-danger"><strong>{Math.floor(totalEquityValue* 100) /100}</strong></div>;
			}
			
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
		var lossBCH= <div className="text-success"><strong>{Math.round(bchUnits * this.state.bch *100) / 100}</strong></div>;
			if (bchEquity < this.state.bchInvestment) {
lossBCH = <div className="text-danger"><strong>{Math.round(bchUnits * this.state.bch *100) / 100}</strong></div>;
			}
	var btcprof= btcEquity - this.state.btcInvestment;
		var profitBTC= <div className="text-success"><strong>{Math.round(btcprof * 100) /100}</strong></div>;
		  if (btcprof < 0) {
profitBTC = <div className="text-danger"><strong>{Math.round(btcprof * 100) /100}</strong></div>;
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
	}
	var bchprof = bchEquity - this.state.bchInvestment;
		var profitBCH= <div className="text-success"><strong>{Math.round(bchprof * 100) /100}</strong></div>;
			if (bchprof < 0) {
profitBCH = <div className="text-danger"><strong>{Math.round(bchprof * 100) /100}</strong></div>;
	}
	var totalProfitvalue =btcprof + ethprof + xrpprof + bchprof ;
	var totalProfit =<div className="text-success"><strong> {totalProfitvalue ? Math.round(totalProfitvalue *100) / 100: 0}</strong></div>;
		if (totalProfitvalue < 0) {
			totalProfit = <div className="text-danger"><strong> {totalProfitvalue ? Math.round(totalProfitvalue *100) / 100: 0}</strong></div>;
		}
		var e = <div className="center">Loading data from servers...</div>;
if(this.state.btc){
	e = <table className="table table-responsive table-striped">
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
        <td><input value={this.state.btcInvestment} placeholder="Your investment" onChange={this.change}/></td>
		<td><input value={this.state.btcPrice} placeholder="Open price" onChange={this.change2} /></td>
		<td>{btcUnits}</td>
        <td>{this.state.btc}</td>
		<td>{lossBTC}</td>
		<td>{profitBTC}</td>
      </tr>
      <tr>
        <td style={{color:'#839CA5'}}><strong>ETH</strong></td>
        <td><input value={this.state.ethInvestment} placeholder="Your investment" onChange={this.change3}/></td>
		<td><input value={this.state.ethPrice} placeholder="Open price" onChange={this.change4}/></td>
		<td>{ethUnits}</td>
        <td>{this.state.eth}</td>
		<td>{lossEth}</td>
		<td>{profitETH}</td>
      </tr>
      <tr>
        <td style={{color:'#3366ff'}}><strong>XRP</strong></td>
        <td><input value={this.state.xrpInvestment} placeholder="Your investment" onChange={this.change5}/></td>
		<td><input value={this.state.xrpPrice} placeholder="Open price" onChange={this.change6}/></td>
		<td>{xrpUnits}</td>
        <td>{this.state.xrp}</td>
		<td>{lossXRP}</td>
		<td>{profitXRP}</td>
      </tr>
	  <tr>
        <td style={{color:'#ffcc00'}}><strong>BCH</strong></td>
        <td> <input value={this.state.bchInvestment} placeholder="Your investment" onChange={this.change7}/></td>
		<td> <input value={this.state.bchPrice} placeholder="Open price" onChange={this.change8}/></td>
		<td>{bchUnits}</td>
        <td>{this.state.bch}</td>
		<td>{lossBCH}</td>
		<td>{profitBCH}</td>
      </tr>
	  <tr>
        <td></td>
        <td></td>
		<td></td>
		<td></td>
        <td><strong>Total:</strong></td>
		<td>{totalEquity} </td>
		<td>{totalProfit}</td>
      </tr>
    </tbody>
  </table>;
}
		return (
            <div className="container">
			{e}
</div>
          )
        }
      }
