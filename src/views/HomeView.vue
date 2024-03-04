<script >
// import CountAdd from '@/components/CountAdd.vue'
export default{
  // components:{
  //           CountAdd,
  //         },

  //   data(){
  //       return{
  //         add:'',
  //         // CityData:'',
  //       };
  //   },
    // mounted() {
    //   fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //       this.CityData = data,
    //       console.log(this.CityData);
    //     }) 
    // },
    // methods:{
    
    // },
}
</script>

<template>
<div class="all w-full h-screen ">
  <div class="tittle w-full h-[50px] px-5 py-2 text-3xl">
    <span>商品列表</span>
  </div>

  <div class="flex justify-end px-5 py-2">
    <img src="../assets/image/shop-1.png" alt="">
    <img src="../assets/image/shop-2.png" alt="">
  </div>

  <div class="content-all w-full h-[800px]  flex justify-center">
    <!-- 1 -->
    <div class="content w-[1600px] h-[800px]  flex gap-5">
      <div class="shop-menu w-[300px] h-[630px] border rounded-xl">
        <img class=" rounded-t-xl" src="../assets/image/shop-3.png" alt="">

        <div class="text text-black   w-[300px] h-[250px] px-2 py-2">
          <div class="menu-tittle text-start ">
            <span>Bytecard</span>
          </div>
          <div class="menu-content py-2">
            <span>Immunization not carried out because of caregiver refusal</span>
          </div>
          <div class="menu-price">
            <span>價格:954</span>
          </div>
        </div>
        
        <div class="btn w-[300px] h-[35px] flex items-center  mb-5">
          <span>數量:</span>
          <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-l-full ml-5">-</button>
          <input type="text" class="w-[75px] h-[35px] border">
          <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-r-full ">+</button>
        </div>

        <div class="btn-buy w-[300px] h-[25px] bg-blue-800 flex justify-center items-center text-white rounded-b-xl">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>加入購物車</span>
        </div>
      </div>
      <!-- 2 -->
      <div class="shop-menu w-[300px] h-[630px] border rounded-xl">
        <img class=" rounded-t-xl" src="../assets/image/shop-3.png" alt="">

        <div class="text text-black   w-[300px] h-[250px] px-2 py-2">
          <div class="menu-tittle text-start ">
            <span>Bytecard</span>
          </div>
          <div class="menu-content py-2">
            <span>Immunization not carried out because of caregiver refusal</span>
          </div>
          <div class="menu-price">
            <span>價格:954</span>
          </div>
        </div>
        
        <div class="btn w-[300px] h-[35px] flex items-center  mb-5">
          <span>數量:</span>
          <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-l-full ml-5">-</button>
          <input type="text" class="w-[75px] h-[35px] border">
          <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-r-full ">+</button>
        </div>

        <div class="btn-buy w-[300px] h-[25px] bg-blue-800 flex justify-center items-center text-white rounded-b-xl">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>加入購物車</span>
        </div>
      </div>
      <!-- 3 -->
      <div class="shop-menu w-[300px] h-[630px] border rounded-xl">
        <img class=" rounded-t-xl" src="../assets/image/shop-3.png" alt="">

        <div class="text text-black   w-[300px] h-[250px] px-2 py-2">
          <div class="menu-tittle text-start ">
            <span>Bytecard</span>
          </div>
          <div class="menu-content py-2">
            <span>Immunization not carried out because of caregiver refusal</span>
          </div>
          <div class="menu-price">
            <span>價格:954</span>
          </div>
        </div>
        
        <div class="btn w-[300px] h-[35px] flex items-center  mb-5">
          <span>數量:</span>
          <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-l-full ml-5">-</button>
          <input type="text" class="w-[75px] h-[35px] border">
          <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-r-full ">+</button>
        </div>

        <div class="btn-buy w-[300px] h-[25px] bg-blue-800 flex justify-center items-center text-white rounded-b-xl">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>加入購物車</span>
        </div>
      </div>
      <!-- 4 -->
      <div class="shop-menu w-[300px] h-[630px] border rounded-xl">
        <img class=" rounded-t-xl" src="../assets/image/shop-3.png" alt="">

        <div class="text text-black   w-[300px] h-[250px] px-2 py-2">
          <div class="menu-tittle text-start ">
            <span>Bytecard</span>
          </div>
          <div class="menu-content py-2">
            <span>Immunization not carried out because of caregiver refusal</span>
          </div>
          <div class="menu-price">
            <span>價格:954</span>
          </div>
        </div>
        
        <div class="btn w-[300px] h-[35px] flex items-center  mb-5">
          <span>數量:</span>
          <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-l-full ml-5">-</button>
          <input type="text" class="w-[75px] h-[35px] border">
          <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-r-full ">+</button>
        </div>

        <div class="btn-buy w-[300px] h-[25px] bg-blue-800 flex justify-center items-center text-white rounded-b-xl">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>加入購物車</span>
        </div>
      </div>
      <!-- 5 -->
      <div class="shop-menu w-[300px] h-[630px] border rounded-xl">
        <img class=" rounded-t-xl" src="../assets/image/shop-3.png" alt="">

        <div class="text text-black   w-[300px] h-[250px] px-2 py-2">
          <div class="menu-tittle text-start ">
            <span>Bytecard</span>
          </div>
          <div class="menu-content py-2">
            <span>Immunization not carried out because of caregiver refusal</span>
          </div>
          <div class="menu-price">
            <span>價格:954</span>
          </div>
        </div>
        
        <div class="btn w-[300px] h-[35px] flex items-center  mb-5">
          <span>數量:</span>
          <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-l-full ml-5">-</button>
          <input type="text" class="w-[75px] h-[35px] border">
          <button type="button" class="w-[30px] h-[35px] text-xl  border rounded-r-full ">+</button>
        </div>

        <div class="btn-buy w-[300px] h-[25px] bg-blue-800 flex justify-center items-center text-white rounded-b-xl">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>加入購物車</span>
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>
<style>
</style>