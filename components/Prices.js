class Prices extends React.Component {
  state = {
    currency: 'EUR'
  }

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <select className="form-control" onChange={e => this.setState({ currency: e.target.value })}>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
        <br />
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Bitcoin rate for {this.props.bpi[this.state.currency].description} </h5>
        <p class="card-text"><span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span>
            <strong>{' ' + this.props.bpi[this.state.currency].rate}</strong></p>
        <a href="#" class="btn btn-primary">Buy now</a>
      </div>
    </div>
  </div>
 <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Bitcoin rate for {this.props.bpi[this.state.currency].description} </h5>
        <p class="card-text"><span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span>
            <strong>{' ' + this.props.bpi[this.state.currency].rate}</strong></p>
        <a href="#" class="btn btn-primary">Sell now</a>
      </div>
    </div>
  </div>
</div>

      </React.Fragment>
    );
  }
}

export default Prices;