<script>
</script>

<template>
<div class="all w-full h-[screen-50px] ">
    <div class="tittle w-full h-[50px]  px-5 py-2 text-3xl mb-5">
        <span>購物車確認</span>
    </div>

    
    <div class=" grid-table w-[1880px] h-[500px]  flex flex-col items-center mb-5">
            <div class="grid-thead"></div>
            
            <div class=" grid-tbody w-[1840px] h-[126px] flex py-2 border-y ">
                <div class="checkbox w-[300px] h-[100px]  flex justify-center items-center">
                    <input class="w-[25px] h-[25px] rounded-xl " type="checkbox">
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    <img class="w-[100px] h-[100px]" src="../assets/image/shop-4.png" alt="">
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    Ronstring
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    $670
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    <span>數量:</span>
                    <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-l-full ml-5">-</button>
                    <input type="text" class="w-[75px] h-[35px] border">
                    <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-r-full ">+</button>
                </div>
            </div>
            <!-- 2 -->
            <div class=" grid-tbody w-[1840px] h-[126px] flex py-2 border-y ">
                <div class="checkbox w-[300px] h-[100px]  flex justify-center items-center">
                    <input class="w-[25px] h-[25px] rounded-xl " type="checkbox">
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    <img class="w-[100px] h-[100px]" src="../assets/image/shop-4.png" alt="">
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    Bitchip         
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    $346
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    <span>數量:</span>
                    <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-l-full ml-5">-</button>
                    <input type="text" class="w-[75px] h-[35px] border">
                    <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-r-full ">+</button>
                </div>
            </div>
            <!-- 3 -->
            <div class=" grid-tbody w-[1840px] h-[126px] flex py-2 border-y ">
                <div class="checkbox w-[300px] h-[100px]  flex justify-center items-center">
                    <input class="w-[25px] h-[25px] rounded-xl " type="checkbox">
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    <img class="w-[100px] h-[100px]" src="../assets/image/shop-4.png" alt="">
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    Bytecard
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    $954
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    <span>數量:</span>
                    <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-l-full ml-5">-</button>
                    <input type="text" class="w-[75px] h-[35px] border">
                    <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-r-full ">+</button>
                </div>
            </div>
            <!-- 4 -->
            <div class=" grid-tbody w-[1840px] h-[126px] flex py-2 border-y ">
                <div class="checkbox w-[300px] h-[100px]  flex justify-center items-center">
                    <input class="w-[25px] h-[25px] rounded-xl " type="checkbox">
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    <img class="w-[100px] h-[100px]" src="../assets/image/shop-4.png" alt="">
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    Alphazap
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    $776
                </div>
                <div class=" w-[300px] h-[100px]  flex justify-center items-center">
                    <span>數量:</span>
                    <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-l-full ml-5">-</button>
                    <input type="text" class="w-[75px] h-[35px] border">
                    <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-r-full ">+</button>
                </div>
            </div>
            
    </div>

    <div class="flex justify-end flex-wrap px-5">
        <h2 class="text-2xl text-end font-bold w-full">
            商品數量:0
        </h2>
        <h2 class="text-2xl text-end font-bold w-full">
            商品總金額: $0
        </h2>
    </div>

    <div class="flex justify-between gap-4 px-5">
        <div class="flex justify-center items-center bg-[#8c5046] text-white rounded-md px-4 py-1 cursor-pointer">
            <span> 回上頁繼續購買 </span>
        </div>
        <div class="flex justify-center items-center bg-[#50468c] text-white rounded-md px-4 py-1 cursor-pointer">
            <span> 確認購買 </span>
        </div>
    </div>

</div>
</template>

<style>
</style>