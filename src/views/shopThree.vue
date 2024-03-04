<script>
</script>

<template>
    <div class="box-all">
        <div class="tittle w-full h-[50px]  px-5 py-2 text-3xl mb-5">
        <span>購買確認及填寫資訊</span>
        </div>

        <div class=" grid-tbody w-[1823px] h-[150px] flex py-2 border-y ">
                <div class=" w-[453px] h-[100px]  flex justify-center items-center">
                    <img class="w-[100px] h-[100px]" src="../assets/image/shop-4.png" alt="">
                </div>
                <div class=" w-[453px] h-[100px]  flex justify-center items-center">
                    Ronstring
                </div>
                <div class=" w-[453px] h-[100px]  flex justify-center items-center">
                    $670
                </div>
        </div>
        <!-- 2 -->
        <div class=" grid-tbody w-[1823px] h-[150px] flex py-2 border-y ">
                <div class=" w-[453px] h-[100px]  flex justify-center items-center">
                    <img class="w-[100px] h-[100px]" src="../assets/image/shop-4.png" alt="">
                </div>
                <div class=" w-[453px] h-[100px]  flex justify-center items-center">
                    Ronstring
                </div>
                <div class=" w-[453px] h-[100px]  flex justify-center items-center">
                    $670
                </div>
        </div>

        <div class="mb-6 px-5 mt-5">
            <label for="name" class=" block mb-2 text-lg font-bold">姓名</label>
            <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
        </div>
        <div class="mb-6 px-5">
            <label for="phone" class=" block mb-2 text-lg font-bold">電話</label>
            <input type="text" id="phone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
        </div>
        <div class="mb-6 px-5">
            <label for="address" class=" block mb-2 text-lg font-bold">地址</label>
            <input type="text" id="address" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
        </div>
        <div class="mb-6 px-5">
            <label for="email" class=" block mb-2 text-lg font-bold">電子信箱</label>
            <input type="text" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
        </div>
        <div class="mb-6 px-5">
            <label for="paymentMethod" class=" block mb-2 text-lg font-bold">付款方式</label>
            <div class="flex gap-5">
                <div class="flex items-center">
                    <input type="radio" id="paymentMethod1" class="mr-2" required value="信用卡" >
                    <label for="paymentMethod1">信用卡</label>
                </div>
                <div class="flex items-center">
                    <input type="radio" id="paymentMethod2" class="mr-2" required value="貨到付款" >
                    <label for="paymentMethod2">貨到付款</label>
                </div>
            </div>
        </div>
            

        <div class="mb-6 px-5">
            <label for="shippingMethod" class=" block mb-2 text-lg font-bold">運送方式</label>
            <div class="flex gap-5">
                <div class="flex items-center">
                    <input type="radio" id="shippingMethod1" class="mr-2" required value="宅配" >
                    <label for="shippingMethod1">宅配</label>
                </div>
                <div class="flex items-center">
                    <input type="radio" id="shippingMethod2" class="mr-2" required value="超商取貨" >
                    <label for="shippingMethod2">超商取貨</label>
                </div>
            </div>
        </div>

        <div class="flex justify-end flex-wrap px-5 mb-5">
            <h2 class="text-2xl text-end font-bold w-full">
            商品數量:0
            </h2>
            <h2 class="text-2xl text-end font-bold w-full">
            商品總金額: $0
            </h2>
        </div>

        <div class="flex justify-between gap-4 px-5">
            <div class="flex justify-center items-center bg-[#8c5046] text-white rounded-md px-4 py-1 cursor-pointer">
                <span> 回上頁繼續加購 </span>
            </div>
            <div class="flex justify-center items-center bg-[#50468c] text-white rounded-md px-4 py-1 cursor-pointer">
                <span> 確認送出 </span>
            </div>
        </div>
    </div>
</template>