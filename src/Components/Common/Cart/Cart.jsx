const Cart = () => {
  return (
    <div className="flex flex-col justify-between gap-12 px-3 mt-4 border-box">
      <div className="h-[300px] overflow-y-scroll p-3">
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
        <div>dfdsfdsgsfdfgr</div>
      </div>
      <div className="absolute left-0 bottom-20 w-full  bg-white p-5 rounded-md ">
        <div className="flex justify-between ">
          <h1 className="text-xl font-bold">Total Price </h1>
          <h1 className="text-xl font-bold text-red-500">0 $</h1>
        </div>
      </div>
      <div className="absolute left-0 bottom-4 bg-white rounded-md w-full">
        <div className="flex justify-between uppercase">
          <h1 className="text-1xl font-bold flex-1 border p-5 ">View Cart </h1>
          <h1 className="text-1xl font-bold text-red-500 flex-1 border p-5">
            Check Out
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
