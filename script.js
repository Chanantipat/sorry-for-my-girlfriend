let yesSize = 20;
let noSize = 20;
let clickcount = 0;
const yesbtn = document.getElementById("yesbtn");
const nobtn = document.getElementById("nobtn");
const message = document.getElementById("message");
const texts = [
    "แน่ใจนะ🥺",
    "คิดดีๆอีกที❤️",
    "ง้อจริงๆนะ😭",
    "ใจร้าย💔",
    "ให้อภัยเถอะนะ🥹",
    "กดผิดปุ่มป่าว😂",
    "ปุ่มให้อภัยอยู่ตรงนี้นะ❤️",
    "สัญญาว่าจะไม่ทำแล้ว🥺",
    "ง้อจนกว่าจะใจอ่อนเลย😭❤️"
];
yesbtn.addEventListener("click", function () {
    const container = document.querySelector(".container");
    container.classList.add("fade-out");
    setTimeout(() => {
    document.body.innerHTML = `
        <div class="thankyou-page">
    <div class="floating-heart">❤️</div>
    <div class="floating-heart">❤️</div>
    <div class="floating-heart">❤️</div>
    <div class="floating-heart">❤️</div>
    <div class="floating-heart">❤️</div>
    <div class="big-heart">❤️</div>
    <h1 class="thank-title">
        รักกกกกกกกกก
    </h1>
    <p class="thank-text">
         ขอโทษนะที่ทำตัวแบบนั้นไป  
         ถ้าอยากให้ลงเพลงก็บอกได้เลย 
         ตอนเช้าไม่รู้ว่าจะกล้าทักรึป่าว
         ถ้า 7 โมงยังไม่ออนแสดงว่าหลับ 
         ทำตั้งแต่เที่ยงคืนจนตี 3 นอนไม่หลับ
         เพราะที่ทำไปก็หนักอยู่ 
         ขอโทษด้วยที่ดูเป็นห่วงเยอะเกิน รักนะจุ๊บๆ
    </p>
</div>
    `;
    document.body.style.opacity = "1";
    }, 300);
});

nobtn.addEventListener("click", function () {
    clickcount++;
    yesSize += 10;
    noSize -= 2;
    yesbtn.style.fontSize = yesSize + "px";
    yesbtn.style.padding =
    (yesSize * 0.8) + "px " +
    (yesSize * 1.6) + "px";
    if(noSize > 8){
        nobtn.style.fontSize = noSize + "px";
    }
    if(clickcount <= texts.length){
        message.innerHTML = texts[clickcount - 1];
    }else{
        message.innerHTML = "เหลือปุ่มเดียวแล้วนะ😂❤️";
    }
    if(noSize <= 8){
        nobtn.style.opacity = "0.3";
    }
    if(noSize <= 4){
        nobtn.style.display = "none";
        message.innerHTML = "ไม่มีทางเลือกแล้วนะ😆❤️"
    }
});