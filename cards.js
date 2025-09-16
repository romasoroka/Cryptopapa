document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");

  // Створюємо один контейнер для всіх карток
  let html = `<div class="grid grid-cols-5 gap-[1rem] mt-[2.5rem]">`;

  // Додаємо картки в цикл
  for (let i = 0; i < 5; i++) {
    html += `
    <div class="bg-white rounded-[0.75rem] p-[1.375rem]">
      <h3 class="text-black text-[1rem] font-semibold">
        Bitmain Antminer<br />L9 Scrypt 15 Gh
      </h3>
      <div
        class="mt-[0.625rem] flex items-center gap-[0.5rem] p-[0.5rem] rounded-[0.5rem] bg-gradient-to-l from-[#f4f4f4] to-white"
      >
        <div
          class="text-center border border-[#56c95b] rounded-[0.5rem] px-[0.5rem] py-[0.25rem]"
        >
          <span class="text-[#56c95b] text-[0.75rem] font-semibold"
            >715$</span
          ><br />
          <span class="text-[#56c95b] text-[0.625rem] font-medium"
            >В місяць</span
          >
        </div>
        <div class="text-center">
          <span class="text-[#757575] text-[0.75rem] font-semibold"
            >3.6</span
          ><br />
          <span class="text-[#757575] text-[0.625rem] font-medium"
            >кВт/Год</span
          >
        </div>
        <div class="text-center">
          <span class="text-[#757575] text-[0.75rem] font-semibold"
            >16</span
          ><br />
          <span class="text-[#757575] text-[0.625rem] font-medium"
            >Gh/s</span
          >
        </div>
      </div>
      <img
        class="w-[10.9375rem] h-[9.5rem] mt-[1rem]"
        src="https://c.animaapp.com/mfla1zt2orCFIS/img/image-1-4.png"
        alt="Bitmain Antminer L9"
      />
      <div class="flex items-center justify-between mt-[0.5rem]">
        <div class="flex items-center gap-[0.4rem]">
          <span class="text-black text-[1.5rem] font-semibold"
            >9000$</span
          >
          <div class="flex items-center gap-[0.25rem]">
            <div
              class="w-[0.5rem] h-[0.5rem] bg-[#48af4c] rounded-full"
            ></div>
            <span
              class="text-[#48af4c] text-[0.625rem] ml-4 font-semibold whitespace-nowrap"
              >В наявності</span
            >
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button
          class="w-[7.8125rem] h-[2.5rem] bg-gradient-to-r from-green-500 to-green-400 rounded-[0.5rem] flex items-center justify-center"
        >
          <img
            class="w-[1.1875rem] h-[1.1875rem] mr-[0.5rem]"
            src="https://c.animaapp.com/mfla1zt2orCFIS/img/icons8-buy.svg"
            alt="Іконка покупки"
          />
          <span class="text-white text-[0.75rem] font-semibold"
            >Купити</span
          >
        </button>
        <img
          class="w-[2.5rem] h-[2.5rem]"
          src="https://c.animaapp.com/mfla1zt2orCFIS/img/group-238${
            i ? "-" + i : ""
          }.png"
          alt="Іконка дії"
        />
      </div>
    </div>
  `;
  }

  // Закриваємо контейнер grid
  html += `</div>`;

  // Додаємо HTML до контейнера
  container.innerHTML = html;
});
