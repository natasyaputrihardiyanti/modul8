import React, {Component} from 'react';
import axios from 'axios'

class AddProduct extends React.Component{
  constructor(){
      super()
      this.state={
          product_id : '',
          product_name : '',
          product_price : '',
      }
  }
  handleChange = (e) =>{
      this.setState({ [e.target.name] : e.target.value })
  }
  handleSubmit = async(e) => {
      e.preventDefault()
      console.log(this.state)
      await axios.post("http://localhost/reactapi/AddProduct.php" , this.state)
      this.props.history.push('/product');
  }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label for="product_id">Product Id</label>
                        <input type="number" className="form-control" name="product_id" placeholder="EnterProductId" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="product_name">Product Name</label>
                        <input type="String" className="form-control" name="product_name" placeholder="EnterProductName" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="product_price">Product Price</label>
                        <input type="number" className="form-control" name="product_price" placeholder="EnterProductPrice" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <a type="button" className="btn btn-outline-primary" href="Home">Back</a>
                </form>

            </div>
        )
    }
}
export default AddProduct;
