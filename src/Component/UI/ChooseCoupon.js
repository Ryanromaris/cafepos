function ChooseCoupon({ coupon, getCouponValue, changeState }) {
  return (
    <div>
      <h1>쿠폰 선택</h1>
      <h2>*테이크아웃 제품은 쿠폰이 적용되지 않습니다.</h2>
      <label>쿠폰을 골라주세요</label>
      {console.log('cou:', coupon)}
      <select name='coupons' id='coupon-select' onChange={getCouponValue}>
        <option value=''>--Please choose an option--</option>
        <option value='5%'>5%</option>
        <option value='7%'>7%</option>
        <option value='10%'>10%</option>
      </select>
      <br />
      <h2>선택한 쿠폰</h2>
      {coupon}
      <br />
      <button onClick={changeState}>쿠폰 선택 완료</button>
    </div>
  );
}

export default ChooseCoupon;
