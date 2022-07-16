import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetLg.css";
import { format } from "timeago.js"

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const [statusType, setstatusType] = useState(["Pending", "Placed" , "Dispatched" , "Delivered"] )


  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch { }
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Action</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">Rs. {order.amount}</td>
            <td>
              <Button type={order.status} />
            </td>
            <td className="widgetLgStatus">


              <select  >
                <option value="Pending">Pending</option>
                <option value="Placed">Delivered</option>
                <option value="Dispatched">Dispatched</option>
                <option value="Delivered">Delivered</option>
              </select>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
