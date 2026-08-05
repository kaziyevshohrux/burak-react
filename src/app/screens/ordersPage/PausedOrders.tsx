import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { retrievePausedOrders } from "./selector";
import { Message, serverApi } from "../../../lib/config";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { Product } from "../../../lib/types/products";
import { useGlobals } from "../../hooks/useGlobals";
import { T } from "../../../lib/types/common";
import { OrderStatus } from "../../../lib/enums/order.enum copy";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import OrderService from "../../services/OrderService";


const pausedOrdersRetrever = createSelector( retrievePausedOrders, 
    (pausedOrders) => ({pausedOrders}) )


    interface pausedOrdersProps {
      setValue: (input: string) => void
    }



export default function PausedOrders(props: pausedOrdersProps) {
  const {setValue} = props
const {authMember , setOlderBuilder} = useGlobals()

  /*handlers*/

  const deleteOrderHandler = async (e: T) => {
    try{
    if(!authMember) throw new Error(Message.error2)
   
    const orderId = e.target.value
    const input: OrderUpdateInput = {
      orderId : orderId,
      orderStatus : OrderStatus.DELETE
    }

    const confirmation = window.confirm('do you want to delete the order')
    if (confirmation) {
      const order = new OrderService()
      await order.updateOrder(input)
      setOlderBuilder(new Date())

    } 
  }
  catch(err){
    console.log(err)
    sweetErrorHandling(err)
    throw err
  }
  }

  const processOrderHandler = async (e: T) => {
    try{
    if(!authMember) throw new Error(Message.error2)
      //payment proccess
   
    const orderId = e.target.value
    const input: OrderUpdateInput = {
      orderId : orderId,
      orderStatus : OrderStatus.PROCESS
    }

    const confirmation = window.confirm('do you want to prosecc with payment')
    if (confirmation) {
      const order = new OrderService()
      await order.updateOrder(input)

       setValue("2")
      setOlderBuilder(new Date())

    } 
  }
  catch(err){
    console.log(err)
    sweetErrorHandling(err)
    throw err
  }
  }


  const {pausedOrders} = useSelector(pausedOrdersRetrever)
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order?.orderItems?.map((item:  OrderItem) => {
                  const product : Product = order.productData.filter((ele: Product)=> 
                  item.productId === ele._id)[0]
                  const imagePath = `${serverApi}/${product.productImages[0]?.replace(/\\/g, '/')}`
                  return (
                    <Box key={item._id} className={"orders-name-price"}>
                      <img
                        src={imagePath}
                        className={"order-dish-img"}
                      />
                      <p className={"title-dish"}>{product.productName}</p>
                      <Box className={"price-box"}>
                        <p>${item.itemPrice}</p>
                        <img src={"/icons/close.svg"} />
                        <p>{item.itemQuantity}</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>${item.itemQuantity * item.itemPrice}</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <Button
                value={order._id}
                onClick={deleteOrderHandler}
                  variant="contained"
                  color="secondary"
                  className={"cancel-button"}
                >
                  Cancel
                </Button>
                <Button 
                  value={order._id}
                 onClick={processOrderHandler}
                variant="contained" className={"pay-button"} >
                  Payment
                </Button>
              </Box>
            </Box>
          );
        })}

        {!pausedOrders || 
        (pausedOrders.length === 0 && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
            />
          </Box>
        ))}
      </Stack>
    </TabPanel>
  );
}
