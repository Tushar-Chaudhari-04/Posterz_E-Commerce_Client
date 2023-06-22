import React from "react";
import "./Payment.scss";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { resetCart } from "../../redux/slice/cartSlice/CartSlice";
import { useDispatch } from "react-redux";

const Payment = () => {
  const params = useParams();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const status = params.status;
  console.log("status",status);  
  const infoData = {
    success: {
      message: "Your Order has been  placed Successfully",
      cta: "Shop More",
      icon: <BsFillCartCheckFill />,
    },
    failure: {
      message: "Your Payment is Failed",
      cta: "Please Try Again",
      icon: <BiErrorCircle />,
    },
  };

  if(status === 'success') {
    dispatch(resetCart())
}

  return (
    <div className="payments">
      <div className="payments-icon" style={{color:status==="failure"?"red":""}}>{infoData[status].icon}</div>
      <h2 className="message">{infoData[status].message}</h2>
      <button className="btn-primary"  onClick={()=>{navigate("/")}}>{infoData[status].cta}</button>
    </div>
  );
};

export default Payment;
