import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import Meter from "../Stats/Meter";

export default function FeaturedInfo() {
  const [orders, setOrders] = useState([]);
  const [ordersDelivered, setordersDelivered] = useState(0);
  const [ordersDispatched, setordersDispatched] = useState(0);
  const [ordersPending, setordersPending] = useState(0);
  const [ordersPlaced, setordersPlaced] = useState(0);
  const [cost, setCost] = useState(0);

  const getOrders = async () => {
    try {
      const res = await userRequest.get("orders/");
      setOrders(res.data)
      setordersPending(0)
      setordersDelivered(0)
      setordersDispatched(0)
      setordersPlaced(0)
      setCost(0)
      for (let order of orders) {
        setCost(prev => prev + order.amount)

        if (order.status === "placed") {
          setordersPlaced(prev => prev + 1)
        } else if (order.status === "dispatched") {
          setordersDispatched(prev => prev + 1)
        } else if (order.status === "delivered") {
          setordersDelivered(prev => prev + 1)
        } else if (order.status === "pending") {
          setordersPending(prev => prev + 1)
        }
      }
    } catch { }
  };

  useEffect(() => {
    getOrders();
  }, []);


  return (
    <div className="featured">

      <button onClick={getOrders }>UPDATE</button>
      <Meter name="Total Orders" value={orders.length} subtitle="Received so far"></Meter>
      <Meter name="Revenue(Rs.)" value={cost} subtitle="Paisa hi paisa"></Meter>
      <Meter name="Pending" value={ordersPending} subtitle="Payment to be confirmed"></Meter>
      <Meter name="Placed" value={ordersPlaced} subtitle="To be made and handed over to courier service"></Meter>
      <Meter name="Dispatched" value={ordersDispatched} subtitle="Yet to be received by customer"></Meter>
      <Meter name="Delivered" value={ordersDelivered} subtitle="Happy Customers"></Meter>

    </div>
  );
}
