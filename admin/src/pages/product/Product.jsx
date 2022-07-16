import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useSelector , useDispatch } from "react-redux";
import { userRequest } from "../../requestMethods";
import { updateProduct } from "../../redux/apiCalls";
import { useState } from "react";



export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  
  const product = useSelector((state) =>
  state.product.products.find((product) => product._id === productId)
  );
  const [name,setName] = useState(product.title)
  const [desc,setDesc] = useState(product.desc)
  const [price,setPrice] = useState(product.price)
  
  const dispatch = useDispatch() 

  const handlesubmit = (e) =>{
    e.preventDefault()
    dispatch(updateProduct(product._id , {name , desc , price} , dispatch))
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            
            
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label >Product Name</label>
            <input type="text" placeholder={product.title} onChange={e=> setName(e.target.value.trim())} />
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} onChange={e=> setDesc(e.target.value.trim())}/>
            <label>Price</label>
            <input type="text" placeholder={product.price} onChange={e=> setPrice(e.target.value.trim())}/>
            
           
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={e => handlesubmit(e)}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
