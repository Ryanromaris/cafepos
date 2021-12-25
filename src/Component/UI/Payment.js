function Payment({
  menu,
  getPayInfo,
  cardOrCash,
  total,
  cart,
  changeState,
  coupon,
}) {
  return (
    <div>
      <h1>결제하기</h1>
      <h2>결제방법을 골라주세요</h2>
      <h3>*현금 결제시 5% 추가할인 됩니다.</h3>
      <button onClick={getPayInfo}>현금</button>
      <button onClick={getPayInfo}>카드</button>
      <h2>선택한 결제수단</h2>
      {cardOrCash}
      <h2>결제 상품 확인</h2>
      {cart.map((ele) => {
        let total_cost = [];
        total_cost.push(
          Math.floor(
            menu.filter((el) => el.메뉴명 === ele.메뉴명)[0].가격 *
              ele.수량 *
              (ele.메뉴명.includes('Take out')
                ? 1
                : 1 - coupon.split('%')[0] * 0.01) *
              (cardOrCash === '현금' ? 0.95 : 1)
          )
        );
        total =
          total +
          Math.floor(
            menu.filter((el) => el.메뉴명 === ele.메뉴명)[0].가격 *
              ele.수량 *
              (ele.메뉴명.includes('Take out')
                ? 1
                : 1 - coupon.split('%')[0] * 0.01) *
              (cardOrCash === '현금' ? 0.95 : 1)
          );

        return ele.수량 === 0 ? (
          ''
        ) : (
          <div>
            {ele.메뉴명}:{ele.수량}잔,
            <del>
              {menu.filter((el) => el.메뉴명 === ele.메뉴명)[0].가격 * ele.수량}
              원
            </del>{' '}
            <span>{total_cost.map((cost) => cost)}원</span>
          </div>
        );
      })}
      <div>총 금액: {total}원</div>
      <br />
      <button onClick={changeState}>결제하기</button>
    </div>
  );
}

export default Payment;
