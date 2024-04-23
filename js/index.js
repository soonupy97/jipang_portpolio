var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
// back up
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // 이미지 배열 정의
      var images = [
        "../image/tistory.svg",   // 첫 번째 bullet 이미지
        "../image/github.svg",   // 두 번째 bullet 이미지
        "../image/notion.svg",   // 첫 번째 bullet 이미지
        "../image/tistory.svg",   // 첫 번째 bullet 이미지
      ];

      // 이미지가 배열에 있는 경우 이미지를 사용하여 bullet 생성
      if (index < images.length) {
        return '<span class="' + className + '"><img src="' + images[index] + '" style="width: 100%; height: auto;"></span>';
      } else { // 이미지 배열을 벗어난 경우 숫자로 표시
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
  },
});