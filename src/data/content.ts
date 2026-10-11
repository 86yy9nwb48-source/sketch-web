// Centralized copy + structured content for the SKETCH marketing site.
// Edit text/photo references here without touching component/layout code.

// Real SKETCH photography used across the site — see README note in
// each section component for why a given file was picked over its alternates.
export const sketchImages = {
  hero: { src: "/images/director-workspace.png", alt: "SKETCH 디렉터가 노트북과 태블릿, 퍼스널 컬러 자료를 함께 살펴보며 이미지를 분석하는 모습" },
  problem: { src: "/images/director-notes.png", alt: "펜을 들고 노트북 화면을 보며 생각하는 디렉터" },
  serviceAnalysis: { src: "/images/director-color-fabrics.png", alt: "노트북과 컬러 패브릭을 함께 두고 분석하는 모습" },
  serviceStyling: { src: "/images/session-consult.png", alt: "디렉터와 고객이 테이블에서 컬러와 팔레트를 두고 상담하는 모습" },
  indexTone: { src: "/images/tone.png", alt: "Tone and Temperature analysis" },
  indexEnergy: { src: "/images/detail-palette-session.jpg", alt: "컬러 팔레트를 손에 들고 설명하는 디렉팅 장면" },
  brandStatement: { src: "/images/session-makeup.png", alt: "디렉터가 고객에게 실제 아이 메이크업을 적용하는 모습" },
  director: { src: "/images/director-color-fabrics.png", alt: "컬러 자료를 살펴보는 SKETCH 디렉터" },
  processTest: { src: "/images/journey-worksheet.jpg", alt: "이너 테스트 설문지에 펜으로 답을 적어 내려가는 손" },
  processConsult: { src: "/images/session-consult.png", alt: "디렉터와 고객이 테이블에서 상담하는 모습" },
  processFinal: { src: "/images/session-makeup.png", alt: "디렉터가 고객에게 컬러와 뷰티 디렉션을 적용하는 모습" },
  serviceBlueprint: { src: "/images/journey-worksheet.jpg", alt: "이너 테스트 분석지에 펜으로 답을 적어 내려가는 손" },
  indexInnerNarrative: { src: "/images/inner-look.png", alt: "Inner Narrative" },
  silhouette: { src: "/images/silhouette.png", alt: "Silhouette and Structure analysis" },
  processBlueprint: { src: "/images/report.jpg", alt: "Personal Image Blueprint report" },
} as const;

export const nav = [
  { label: "ABOUT", href: "#about" },
  { label: "METHOD", href: "#method" },
  { label: "PROGRAM", href: "#program" },
  { label: "CONTACT", href: "#contact" },
] as const;

export const hero = {
  wordmark: "SKETCH.",
  descriptor: "VISUAL DIRECTING",
  headline: ["나를 이해하는 것에서", "이미지가 시작됩니다."],
};

export const manifesto = {
  eyebrow: "OUR PHILOSOPHY",
  quote: ["불일치를 넘어,", "가장 나다운", "일치로."],
  body: [
    "사람에게는 실제 성향과 타인에게 보이는 이미지 사이에 작은 간극이 존재합니다.",
    "우리는 그 간극을 없애기 위해 유행하는 스타일을 덧입히지 않습니다. 내면의 성향과 외면의 구조를 함께 읽고, 두 요소가 가장 자연스럽게 만나는 지점을 설계합니다.",
  ],
  final: "“좋은 이미지는 만들어지는 것이 아니라,\n발견되는 것이라고 믿습니다.”",
};

export const problem = {
  headline: ["분위기에는 이유가 있습니다."],
  body: [
    "내가 생각하는 나와 타인에게 보이는 나.",
    "SKETCH는 그 사이의 간극을 발견하고 당신에게 가장 자연스러운 이미지 방향을 설계합니다.",
  ],
};

export const services = {
  eyebrow: "WHAT WE DO",
  eyebrowIndex: "01 — 03",
  headline: ["보이는 것을 바꾸기 전에", "당신을 먼저 읽습니다."],
  items: [
    {
      num: "01",
      title: ["INNER", "× OUTER"],
      tagline: "내면과 외면을 함께 읽는\nVisual Directing",
      desc: "성향과 행동 패턴, 신체의 선과 색, 타인에게 전달되는 인상을 함께 분석합니다.",
      image: sketchImages.serviceAnalysis,
    },
    {
      num: "02",
      title: ["IMAGE", "BLUEPRINT"],
      tagline: "감이 아닌 기준으로 만드는\n나만의 이미지 방향",
      desc: "분석한 데이터를 바탕으로 개인의 이미지 방향을 시각적인 기준으로 구조화합니다.",
      image: sketchImages.serviceBlueprint,
    },
    {
      num: "03",
      title: ["STYLING", "DIRECTION"],
      tagline: "분석에서\n실제 이미지까지",
      desc: "도출된 이미지 방향을 퍼스널 컬러 / 뷰티 / 패션 / 스타일링으로 연결합니다.",
      image: sketchImages.serviceStyling,
    },
  ],
};

export const philosophy = {
  headline: ["SKETCH는", "‘무엇을 입을까?’보다", "‘나는 어떤 사람인가?’에서", "시작합니다."],
  big: "WHY?",
  body: [
    "우리는 사람의 이미지를 단순히 얼굴형이나 체형으로 분류하지 않습니다.",
    "성향과 행동, 에너지의 방향, 신체의 선과 색을 함께 관찰하여 그 사람에게 이미 존재하는 분위기를 발견합니다.",
    "그리고 그것을 실제로 사용할 수 있는 이미지 언어로 만듭니다.",
  ],
};

export const imageIndex = {
  eyebrow: "IMAGE DIRECTING SYSTEM",
  headline: ["우리는 당신을", "네 가지 방향에서 읽습니다."],
  items: [
    {
      num: "01",
      title: ["SILHOUETTE", "& STRUCTURE"],
      tagline: "몸의 선이 만드는\n인상의 흐름",
      desc: "신체 비율과 골격, 실루엣을 통해 외면의 구조를 읽습니다.",
      image: sketchImages.silhouette,
    },
    {
      num: "02",
      title: ["TONE", "& TEMPERATURE"],
      tagline: "피부와 에너지의\n온도",
      desc: "퍼스널 컬러와 전체 이미지의 무드를 분석합니다.",
      image: sketchImages.indexTone,
    },
    {
      num: "03",
      title: ["VISUAL", "ENERGY"],
      tagline: "보이는 에너지의\n방향성",
      desc: "표정, 행동, 분위기를 통해 타인에게 전달되는 에너지를 관찰합니다.",
      image: sketchImages.indexEnergy,
    },
    {
      num: "04",
      title: ["INNER", "NARRATIVE"],
      tagline: "내면과 외면 사이의\n이야기",
      desc: "성향과 행동 패턴을 분석하여 개인의 내적인 이미지 기질을 파악합니다.",
      image: sketchImages.indexInnerNarrative,
    },
  ],
};

export const brandStatement = {
  headline: ["WE ARE", "SKETCH."],
  body: [
    "우리는 스타일을 정해주지 않습니다.",
    "당신에게 이미 존재하는 이미지를 발견하고, 그것을 스스로 사용할 수 있는 기준으로 만듭니다.",
  ],
  closing: ["SKETCH는 당신을 다른 사람으로 만드는 곳이 아니라", "가장 당신다운 모습을 더 선명하게 만드는 곳입니다."],
  image: sketchImages.brandStatement,
};

export const whySketch = {
  headline: ["WHY", "SKETCH?"],
  items: [
    {
      num: "01",
      title: "INNER × OUTER",
      desc: "외적인 특징만이 아니라 개인의 성향까지 함께 분석합니다.",
    },
    {
      num: "02",
      title: "STRUCTURED ANALYSIS",
      desc: "막연한 감각을 명확한 이미지 기준으로 구조화합니다.",
    },
    {
      num: "03",
      title: "ACTIONABLE DIRECTION",
      desc: "진단으로 끝나지 않고 실제로 사용할 수 있는 스타일 방향을 제공합니다.",
    },
  ],
};

// NOTE: no director name/career data exists in the source brand material —
// keep this studio-level until a real name + bio is supplied. Do not invent one.
export const director = {
  eyebrow: "VISUAL DIRECTOR",
  headline: ["DIRECTING", "THE IMAGE", "BEHIND YOU."],
  name: "", // TODO: add the director's real name here
  body: [
    "사람마다 이미 자신만의 이미지 언어를 가지고 있다고 믿습니다.",
    "SKETCH는 그것을 새로 만드는 것이 아니라 발견하고, 정리하고, 선명하게 만드는 과정입니다.",
  ],
  cta: "VIEW PROFILE",
  image: sketchImages.hero,
};

export const process = {
  headline: ["YOUR", "SKETCH", "PROCESS"],
  steps: [
    { num: "01", en: "PRE TEST", kr: "사전 이너 테스트 작성", desc: "성향과 추구미 파악", image: sketchImages.processTest, imagePosition: undefined as string | undefined },
    { num: "02", en: "INNER DIRECTING", kr: "전문 디렉터와 함께", desc: "내면의 성향과 이미지 방향 탐색", image: sketchImages.problem, imagePosition: undefined as string | undefined },
    { num: "03", en: "VISUAL ANALYSIS", kr: "신체 / 컬러 / 분위기 데이터를", desc: "종합하여 분석", image: sketchImages.processConsult, imagePosition: undefined as string | undefined },
    { num: "04", en: "IMAGE BLUEPRINT", kr: "개인의 고유한 이미지 방향을 담은", desc: "비주얼 분석지 제공", image: sketchImages.processBlueprint, imagePosition: "object-[50%_18%]" as string | undefined },
    { num: "05", en: "FINAL DIRECTION", kr: "퍼스널 컬러 / 뷰티 / 패션 / 스타일링으로", desc: "분석 결과를 실제 이미지에 적용", image: sketchImages.processFinal, imagePosition: undefined as string | undefined },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  headline: "자주 묻는 질문",
  items: [
    {
      q: "후기는 어떻게 작성하나요?",
      a: "이너 디렉팅 체험 후 약 5–10분 정도의 간단한 인터뷰와 텍스트(자필) 후기 형태로 진행됩니다.",
    },
    {
      q: "소요 시간은 어느 정도인가요?",
      a: "이너 디렉팅과 비주얼 디렉팅은 각각 약 1시간 내외로 진행됩니다.",
    },
    {
      q: "체험은 어디에서 진행되나요?",
      a: "강남 / 이수역 인근 카운슬러 사무실에서 진행되며, 상황에 따라 인근 카페 또는 미팅룸으로 변경될 수 있습니다.",
    },
    {
      q: "이미지 분석지는 언제 받을 수 있나요?",
      a: "이너 디렉팅 이후 분석지 제작 및 수령까지 2–3주 정도 소요되며, 체험 일정에 따라 달라질 수 있습니다.",
    },
  ],
};

export const finalCta = {
  eyebrow: "YOUR IMAGE ALREADY EXISTS.",
  headline: ["DISCOVER", "YOUR", "IMAGE."],
  secondary: "INSTAGRAM",
};

export const brand = {
  name: "SKETCH.",
  tagline: "VISUAL DIRECTING",
  instagramHandle: "@along_sketch",
  instagramUrl: "https://instagram.com/along_sketch",
  email: "sketch.from.one.line@gmail.com",
  // general area only, as stated in the FAQ location answer — no fabricated street address
  location: "Gangnam · Isu, Seoul",
};
