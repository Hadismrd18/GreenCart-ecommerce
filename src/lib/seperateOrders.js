function seperateOrders(arr) {
  return arr.reduce((acc, item) => {
    const currentSellerOrder = acc.find(
      (order) => order.sellerId === item.sellerId
    );

    if (currentSellerOrder) {
      // add product to existing seller
      currentSellerOrder.items.push({
        product: item.productDetails.data,
        quantity: item.productDetails.quantity,
      });
    } else {
      // create new seller entry
      acc.push({
        sellerId: item.sellerId,
        items: [
          {
            product: item.productDetails.data,
            quantity: item.productDetails.quantity,
          },
        ],
      });
    }
    console.log(acc);
    return acc;
  }, []);
}

export default seperateOrders;
