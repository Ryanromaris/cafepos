import React, { useState } from 'react';
import '../Css/Common.css';
import ChooseMenu from './UI/ChooseMenu';
import ChooseCoupon from './UI/ChooseCoupon';
import Payment from './UI/Payment';
import Wait from './UI/Wait';
function Home() {
  let total = 0;
  const menu = [
    { 메뉴명: '아메리카노(Take out)', 가격: 500 },
    { 메뉴명: '아메리카노', 가격: 1000 },
    { 메뉴명: '카페라떼', 가격: 1500 },
    { 메뉴명: '카라멜 마끼야또', 가격: 2000 },
  ];

  const [cart, setCart] = useState([
    { 메뉴명: '아메리카노(Take out)', 수량: 0 },
    { 메뉴명: '아메리카노', 수량: 0 },
    { 메뉴명: '카페라떼', 수량: 0 },
    { 메뉴명: '카라멜 마끼야또', 수량: 0 },
  ]);

  const [stateOfPage, setStateOfPage] = useState('메뉴선택');
  const [coupon, setCoupon] = useState('');
  const [cardOrCash, setCardOrCash] = useState('');

  const changeState = (event) => {
    // 메뉴선택이 하나도 안되어 있으면 알림창, 되어있으면 쿠폰선택으로 넘어감
    if (event.target.innerHTML === '메뉴 선택 완료') {
      let changed = false;
      for (let i of cart) {
        if (i.수량 !== 0) {
          changed = changed || true;
        }
      }
      if (changed) {
        setStateOfPage('쿠폰선택');
      } else {
        alert('아무것도 안고르셨어요! 메뉴 선택해주세요');
      }
    }
    //쿠폰선택이 안된 경우 알림창, 되어있으면 결제하기로 넘어감
    if (event.target.innerHTML === '쿠폰 선택 완료') {
      if (coupon === '') {
        alert('쿠폰을 하나 골라주세요');
      } else {
        setStateOfPage('결제하기');
      }
    }
    //결제하기 버튼 누르면 한번 더 확인.
    if (event.target.innerHTML === '결제하기') {
      if (cardOrCash === '') {
        alert('결제 수단을 골라주세요');
      } else {
        if (window.confirm(`결제하시겠습니까?`)) {
          setStateOfPage('대기하기');
        }
      }
    }

    //처음 메뉴로 돌아가고 장바구니, 결제방법, 쿠폰 초기화
    if (event.target.innerHTML === '홈으로 돌아가기') {
      setStateOfPage('메뉴선택');
      setCart([
        { 메뉴명: '아메리카노(Take out)', 수량: 0 },
        { 메뉴명: '아메리카노', 수량: 0 },
        { 메뉴명: '카페라떼', 수량: 0 },
        { 메뉴명: '카라멜 마끼야또', 수량: 0 },
      ]);
      setCardOrCash('');
      setCoupon('');
    }
  };

  //고른 쿠폰 값 받기.
  const getCouponValue = (e) => {
    setCoupon(e.target.value);
  };

  //고른 결제방법 받기.
  const getPayInfo = (e) => {
    setCardOrCash(e.target.innerHTML);
  };

  return (
    <div className='main_container'>
      <div className='main_box'>
        {stateOfPage === '메뉴선택' ? (
          <ChooseMenu
            menu={menu}
            cart={cart}
            setCart={setCart}
            changeState={changeState}
          />
        ) : stateOfPage === '쿠폰선택' ? (
          <ChooseCoupon
            coupon={coupon}
            getCouponValue={getCouponValue}
            changeState={changeState}
          />
        ) : stateOfPage === '결제하기' ? (
          <Payment
            menu={menu}
            getPayInfo={getPayInfo}
            cardOrCash={cardOrCash}
            total={total}
            cart={cart}
            changeState={changeState}
            coupon={coupon}
          />
        ) : (
          <Wait cart={cart} changeState={changeState} />
        )}
      </div>
    </div>
  );
}

export default Home;
