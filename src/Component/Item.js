import '../Css/Common.css';

function Item({ item, addToCart, dropFromCart, cart }) {
  return (
    <div>
      <div className='item_box'>
        {item['메뉴명']} <br /> {item['가격']}
        <button onClick={() => addToCart(item['메뉴명'])}>+</button>
        {cart.filter((ele) => ele.메뉴명 === item.메뉴명)[0].수량 >= 1 ? (
          <button onClick={() => dropFromCart(item['메뉴명'])}>-</button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Item;
