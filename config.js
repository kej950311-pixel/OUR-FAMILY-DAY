/**
 * 가족 초대장 Configuration
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,

  // ── 2. 두 사람과 가족 정보 ──
  groom: {
    name: "김범준",
    father: "김진호",
    mother: "이유정",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김은지",
    father: "김남년",
    mother: "김향숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  // ── 3. 가족 모임 정보 ──
  wedding: {
    date: "2026-12-12",
    time: "17:00",
    venue: "승지원",
    address: "충남 천안시 서북구 백석동 26-3",
    tel: "041-567-7887"
  },

  // ── 4. 인사말 ──
  greeting: {
    title: "우리, 가족이 되는 날",
    content: "저희 둘, 예쁘게 만나\n이제는 평생을 함께하기로 했어요.\n\n그리고 그 시작에\n서로의 가족이라는\n소중한 인연이 더해지려 합니다.\n\n처음이라 조금은 어색하고 쑥스럽겠지만,\n함께라서 더 행복할 것 같은 오늘.\n\n저희의 새로운 가족이자\n든든한 편이 되어주실 부모님들,\n저희의 새로운 시작을 함께 축복해주세요.\n\n앞으로 예쁘게 잘 살아볼게요.♡"
  },

  // ── 5. 우리의 이야기 ──
  story: {
    title: "저희 제법 잘 어울리죠?",
    content: "친구처럼 편하게,\n연인처럼 달콤하게,\n만나면 웃음이 끊이지 않는 우리,\n둘만의 재미있는 추억을 쌓아가며\n하루하루 우리답게 즐겁게 사랑하는 중이에요.❤️"
  },

  // ── 6. 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/18677878",
    naver: "https://naver.me/GI3JSQ28"
  },

  // ── 7. 링크 공유 문구 ──
  meta: {
    title: "김범준♥김은지",
    description: "새로운 가족이 되는 첫 만남에 초대합니다."
  },

    // ── 8. 카카오 공유 설정 ──
  kakao: {
    jsKey: "6b6bb324fa9e2d8e77b77db9747e96a0",
    templateId: 139003
  }
};
