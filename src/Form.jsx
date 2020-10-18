import React from 'react';

export default function Form({
  restaurantInfo,
  handleClickAdd,
  handleChangeRestaurantInfo,
}) {
  const { name, type, location } = restaurantInfo;

  return (
    <>
      <input
        name="name"
        placeholder="이름"
        value={name}
        onChange={handleChangeRestaurantInfo}
      />
      <input
        name="category"
        placeholder="분류"
        value={type}
        onChange={handleChangeRestaurantInfo}
      />
      <input
        name="address"
        placeholder="주소"
        value={location}
        onChange={handleChangeRestaurantInfo}
      />
      <button
        type="submit"
        onClick={handleClickAdd}
      >
        등록
      </button>
    </>
  );
}
