import '../Css/Common.css';

function OrderList({ cart }) {
  return (
    <div>
      {cart.map((ele) => {
        return ele.수량 === 0 ? (
          ''
        ) : (
          <div>
            {ele.메뉴명}: {ele.수량}
          </div>
        );
      })}
    </div>
  );
}

export default OrderList;
