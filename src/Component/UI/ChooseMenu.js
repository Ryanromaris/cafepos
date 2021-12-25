import Item from '../Item';
import OrderList from '../OrderList';
function ChooseMenu({ menu, cart, setCart, changeState }) {
  //장바구니에 해당음료 1개 추가하기
  const addToCart = (name) => {
    setCart([
      ...cart.filter((ele) => ele.메뉴명 !== name),
      {
        메뉴명: name,
        수량: cart.filter((ele) => ele.메뉴명 === name)[0].수량 + 1,
      },
    ]);
  };

  //장바구니에 해당 음료 1개 줄이기
  const dropFromCart = (name) => {
    setCart([
      ...cart.filter((ele) => ele.메뉴명 !== name),
      {
        메뉴명: name,
        수량: cart.filter((ele) => ele.메뉴명 === name)[0].수량 - 1,
      },
    ]);
  };
  return (
    <div>
      <h1>메뉴선택</h1>
      {menu.map((item) => (
        <Item
          item={item}
          addToCart={addToCart}
          dropFromCart={dropFromCart}
          cart={cart}
        />
      ))}
      <br />
      <h2>현재 주문 내역</h2>
      <OrderList cart={cart} />
      <button onClick={changeState}>메뉴 선택 완료</button>
    </div>
  );
}

export default ChooseMenu;
