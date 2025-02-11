# 🌙 To the Moon

[![사이트 미리보기](readme-images/link.png)](https://to-the-moon-ashen.vercel.app)



달에 관한 정보를 시각적으로 확인할 수 있는 웹사이트입니다.  
Canvas를 활용한 3D 모델링과 다양한 CSS 애니메이션을 적용하여 생동감 있는 사용자 경험을 제공합니다.

## 📆 프로젝트 기간
- **초기 개발:** 2020.6 - 2020.7 (React.js 기반)
- **업그레이드:** 2025.2 - 2025.2 (Next.js로 변경)

## 👨‍💻 역할
- 1인 개발 (Full-Stack Development)

## 🛠️ 사용 기술
- **Frontend**: React.js → Next.js (2025년 변경)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **3D 모델링**: Canvas API, Three.js
- **CSS 애니메이션**: keyframes, transform 등 활용

## 🚀 섹션별 설명
- **인트로**:CSS transform과 transition기능을 이용한 애니메이션으로 달이 떠오르도록 하여 시각적 재미를 더했습니다. 또한 왼쪽 상단의 music on/off기능으로 드뷔시의 달빛을 즐길 수 있습니다.
<img src="readme-images/moon-intro.png" alt="To the Moon 미리보기" width="600px">

- **달 지형 정보**: SF영화의 우주선 계기판에서 영감을 받아 물체의 정보를 표시하는 애니메이션을 설정하였습니다.
<img src="readme-images/moon-terrain.png" alt="To the Moon 미리보기" width="600px">

- **CSS 카드 애니메이션**: Mouse hover 했을 시에 카드가 뒤집히며 달의 뒷면을 볼 수 있도록 하였습니다. z-index를 통해 카드임에도 3D로 보이도록 하였습니다. 달의 뒷면을 볼 때에는 귀여운 지구가 작게 보이도록 하여 실제로 달의 뒷면에서 바라본 풍경을 고증하였습니다. (궁금하도록 이미지 첨부는 하지 않았으니 위의 링크를 통해 직접 확인해보세요)
<img src="readme-images/moon-card.png" alt="To the Moon 미리보기" width="600px">

- **3D 모델**: Three.js를 통해 Nasa에서 받아온 달의 3D 모델을 사용자가 직접 움직이며 확인할 수 있습니다. 시간에 따라 조금씩 움직이도록 하여 생동감을 더했습니다.
<img src="readme-images/moon-3D.png" alt="To the Moon 미리보기" width="600px">

- **실시간 채팅**: 이전에는 React 버전에서 WebSocket, Express, MongoDB를 활용하여 실시간 채팅 기능을 구현하였습니다. 그러나 Next.js로 업데이트하면서 해당 기능을 비활성화하였습니다. 현재 Next.js 13 버전 이후의 App Router 방식에서는 WebSocket을 사용하기 위해 Express를 통합하거나, 이전 버전의 Page Router 방식을 사용해야 합니다. 이러한 방법 외에도 몇 가지 대안이 있지만, 이는 Next.js 13 버전 이후의 App Router 방식의 장점을 활용하지 못하게 합니다. 따라서, Next.js에서 이 부분이 기능적으로 개선될 때까지 실시간 채팅 기능을 비활성화하기로 결정하였습니다.
<img src="readme-images/chat.png" alt="To the Moon 미리보기" width="600px">



## 📌 설치 및 실행 방법
```sh
# 1. 프로젝트 클론
git clone https://github.com/moonjiuk/to-the-moon.git
cd to-the-moon

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev

