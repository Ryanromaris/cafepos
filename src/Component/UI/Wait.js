import OrderList from '../OrderList';
function Wait({ cart, changeState }) {
  return (
    <div>
      <h1>대기하기</h1>
      <h3>주문이 완료되었습니다. 음료가 나오기 전까지 대기해주세요</h3>
      <h2>주문 및 결제내역</h2>
      <OrderList cart={cart} />
      <button onClick={changeState}>홈으로 돌아가기</button>
    </div>
  );
}

export default Wait;
