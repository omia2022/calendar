// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "퍼스트러브 하츠코이 (2022)" },
  { "number": 2, "message": "패딩턴 (2018)" },
  { "number": 3, "message": "크림슨 피크 (2015)" },
  { "number": 4, "message": "블라인드 (2007)" },
  { "number": 5, "message": "빨간 머리 앤 (2019)" },
  { "number": 6, "message": "화이트 크리스마스 (2011)" },
  { "number": 7, "message": "이터널 선샤인 (2005)" },
  { "number": 8, "message": "휴고 (2012)" },
  { "number": 9, "message": "캐롤 (2016)" },
  { "number": 10, "message": "리틀 포레스트2: 겨울과 봄 (2015)" },
  { "number": 11, "message": "황금나침반 (2007)" },
  { "number": 12, "message": "어네스트와 셀레스틴 (2014)" },
  { "number": 13, "message": "크리스마스라 불리는 소년 (2021)" },
  { "number": 14, "message": "내 사랑 (2017)" },
  { "number": 15, "message": "나니아 연대기 - 사자, 마녀 그리고 옷장 (2005)" },
  { "number": 16, "message": "폴라 익스프레스 (2004)" },
  { "number": 17, "message": "윤희에게 (2019)" },
  { "number": 18, "message": "그랜드 부다페스트 호텔 (2014)" },
  { "number": 19, "message": "엘프 (2004)" },
  { "number": 20, "message": "러브레터 (1999)" },
  { "number": 21, "message": "러브 액츄얼리 (2003)" },
  { "number": 22, "message": "해리 포터와 마법사의 돌 (2001)" },
  { "number": 23, "message": "그린치 (2000)" },
  { "number": 24, "message": "나홀로 집에 (1991)" }
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
//const doors = document.querySelectorAll('.door');
//doors.forEach((door, index) => {
  //door.addEventListener('click', () => {
    // 상위 div의 class 번호를 찾아서 image url에 사용합니다
    //const imageUrl = `image/card/card-${index + 1}.png`;

    // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
    //const doorDiv = document.querySelector(`.day-${index + 1}`)
    //const backDiv = doorDiv.querySelector(`.back`);

    //const style = window.getComputedStyle(backDiv);
    //const pTag = backDiv.querySelector('p')
    //const text = modalMessageList[index]['message']

    // showModal 함수를 호출하여 모달을 표시합니다.
    //showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  //});
//});