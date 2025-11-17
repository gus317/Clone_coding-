import React, { useState, useEffect, useRef }from 'react'
import Banner2_1 from '../../assets/img/HeaderBanner2.png'
import Banner2_2 from '../../assets/img/HeaderBanner2-2.png'
import Banner3_1 from '../../assets/img/HeaderBanner3.png'
import Banner3_2 from '../../assets/img/HeaderBanner3-2.png'

const serviceContentsData = {
    'service1': {
        title: '스마트핏',
        pages: [
            {
                pageTitle: '스마트핏',
                h2: '(주)대동시스템',
                h3: '자동차부품 영업팀(견적대응) 경력직 모집',
                h4_main: '경력1년⬆ 대졸⬆ 인천 남동구',
                bottomH4_left: 'AD',
                bottomH4_right: 'D-20'
            },
            {
                pageTitle: '스마트핏',
                h2: '(주)지피앤피',
                h3: '(주)지피앤피 의료기기 영업, Clicical application..',
                h4_main: '초대졸⬆ 서울 강남구',
                bottomH4_left: 'AD',
                bottomH4_right: 'D-20'
            },
            {
                pageTitle: '스마트핏',
                h2: '(주)지피앤피',
                h3: '(주)지피앤피 영업지원 채용(계약직-대체인력채용)',
                h4_main: '학력무관 서울 강남구',
                bottomH4_left: 'AD',
                bottomH4_right: 'D-20'
            },
            {
                pageTitle: '스마트핏',
                h2: '나무',
                h3: '(주)나무와 함께 성장할 기술영업부문 신입사원을 채...',
                h4_main: '대졸⬆ 경기 군포시',
                bottomH4_left: 'AD',
                bottomH4_right: 'D-27'
            }
        ]
    },
    'service2': {
        title: '합격축하금 공고',
        pages: [
            {
                pageTitle: '원픽',
                h2: '취업만 해도',
                h3: '돈이 들어와요!',
                h4_main: '성공적인 취업, 보너스는 덤!',
                bottomH4_left: '최대 N백만원',
                bottomH4_right: '묻지도 따지지도 않고 💰'
            },
            {
                pageTitle: '원픽',
                h2: '지금 지원하면',
                h3: '특별 축하금 추가 지급',
                h4_main: '한정 기간! 놓치지 마세요',
                bottomH4_left: '기간 한정',
                bottomH4_right: '빠른 지원 필수! 🎉'
            },
            {
                pageTitle: '원픽',
                h2: '합격 후 간편하게',
                h3: '축하금 신청 끝!',
                h4_main: '복잡한 과정 없이 즉시 지급',
                bottomH4_left: '초간단 절차',
                bottomH4_right: '당일 지급 완료! 💳'
            }
        ]
    },
    'service3': {
        title: 'AI 추천',
        pages: [
            {
                pageTitle: 'AI 추천',
                h2: '가장 적합한',
                h3: '공고만 엄선했어요!',
                h4_main: '빅데이터가 당신의 커리어를 설계합니다',
                bottomH4_left: '정교한 매칭',
                bottomH4_right: '나만을 위한 공고 🤖'
            },
            {
                pageTitle: '맞춤 분석',
                h2: '나의 강점과',
                h3: '성장 가능성 진단',
                h4_main: 'AI 리포트로 나의 커리어 방향 설정',
                bottomH4_left: '약점 보완',
                bottomH4_right: '성장 동력 확보 📈'
            }
        ]
    },
    'service4': {
        title: '전문채용관',
        pages: [
            {
                pageTitle: '전문채용',
                h2: '최고의 전문가를 위한',
                h3: '프리미엄 채용관',
                h4_main: '당신의 전문성을 아낌없이 발휘하세요',
                bottomH4_left: '하이엔드 직무',
                bottomH4_right: '최고 대우 보장 🌟'
            },
            {
                pageTitle: '헤드헌팅',
                h2: '숨겨진 기회를',
                h3: '전문가가 찾아드립니다.',
                h4_main: '커리어 컨설팅과 함께 동반 성장',
                bottomH4_left: '비공개 채용',
                bottomH4_right: '상위 1% 인재 💼'
            }
        ]
    },
    'service5': {
        title: '공채속보',
        pages: [
            {
                pageTitle: '공채속보',
                h2: '실시간 업데이트!',
                h3: '주요 기업 공채 정보',
                h4_main: '마감 임박, 오늘 오픈 공고 놓치지 마세요',
                bottomH4_left: '대기업 채용',
                bottomH4_right: '공공기관 공채 📢'
            },
            {
                pageTitle: '채용 일정',
                h2: '월별, 주별로',
                h3: '일정 한눈에 보기',
                h4_main: '체계적인 계획으로 공채를 완벽 대비',
                bottomH4_left: '마감 임박',
                bottomH4_right: '신규 공고 알림 🗓️'
            }
        ]
    }
};

const Main = () => {

    const Banner2 = [ Banner2_1, Banner2_2]
    const [currentBannerImage2, setCurrentBannerImage2] = useState('');
    useEffect(() => {
        const randomIndex2 = Math.floor(Math.random() * Banner2.length);
        setCurrentBannerImage2(Banner2[randomIndex2]);
    }, []); 

    const Banner3 = [ Banner3_1, Banner3_2]
    const [currentBannerImage3, setCurrentBannerImage3] = useState('');
    useEffect(() => {
        const randomIndex3 = Math.floor(Math.random() * Banner3.length);
        setCurrentBannerImage3(Banner3[randomIndex3]);
    }, []); 

    const [selectedServiceId, setSelectedServiceId] = useState('service1'); 

    const handleServiceClick = (serviceId) => {
        setSelectedServiceId(serviceId);
        setCurrentSlideIndex(0); 
    };

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0); 

    const currentService = serviceContentsData[selectedServiceId];
    const totalPages = currentService ? currentService.pages.length : 0;
    
    useEffect(() => {
        if (!currentService || totalPages <= 1) { 
            setCurrentSlideIndex(0); 
            return;
        }

        const interval = setInterval(() => {
            setCurrentSlideIndex(prevIndex => (prevIndex + 1) % totalPages);
        }, 3000);

        return () => clearInterval(interval);
    }, [selectedServiceId, totalPages]); 

    const displayedSlides = [];
    if (currentService) {
        for (let i = 0; i < 3; i++) {
            if (totalPages > 0) {
                const pageIndex = (currentSlideIndex + i) % totalPages;
                displayedSlides.push(currentService.pages[pageIndex]);
            } else {
                displayedSlides.push({ pageTitle: "콘텐츠 없음", h2: "", h3: "", h4_main: "", bottomH4_left: "", bottomH4_right: "" }); 
            }
        }
    } else {
        for (let i = 0; i < 3; i++) {
             displayedSlides.push({ pageTitle: "서비스를 선택하세요", h2: "", h3: "", h4_main: "", bottomH4_left: "", bottomH4_right: "" });
        }
    }
  return (
    <div className='Main_wrap'>
      <div className="Main_inner">
        <div className="Main_Left">
            <div className="Main_Letop">
                <div className="Main_Letop_left" width={752} height={110}>
                    {currentBannerImage2 ? (
                        <img
                            src={currentBannerImage2}
                            alt="랜덤 배너 이미지"
                            style={{ width: '752px', height: '110px', objectFit: 'cover' }}
                                />
                            ) : (
                                <div style={{width: '100%', height: '100%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    이미지 로딩 중...
                                </div>
                            )}
                </div>
                <div className="Main_Letop_right">
                    <h1>알려드립니다!</h1>
                    <h2>구직자를 현혹하는</h2>
                    <h3>구인광고에 주의하세요!</h3>
                </div>
            </div>
             <div className="Main_Lebottom">
                <div className='Main_box1'>
                        <div
                            className={`main-service-item ${selectedServiceId === 'service1' ? 'active' : ''}`}
                            onClick={() => handleServiceClick('service1')}
                        >
                            <h1>↖️스마트핏</h1>
                        </div>
                        <div
                            className={`main-service-item ${selectedServiceId === 'service2' ? 'active' : ''}`}
                            onClick={() => handleServiceClick('service2')}
                        >
                            <h1>✅합격축하금 공고</h1>
                        </div>
                        <div
                            className={`main-service-item ${selectedServiceId === 'service3' ? 'active' : ''}`}
                            onClick={() => handleServiceClick('service3')}
                        >
                            <h1>💡AI 추천</h1>
                        </div>
                        <div
                            className={`main-service-item ${selectedServiceId === 'service4' ? 'active' : ''}`}
                            onClick={() => handleServiceClick('service4')}
                        >
                            <h1>🖥️전문채용관</h1>
                        </div>
                        <div
                            className={`main-service-item ${selectedServiceId === 'service5' ? 'active' : ''}`}
                            onClick={() => handleServiceClick('service5')}
                        >
                            <h1>🔥공채속보</h1>
                        </div>
                </div>
                <div className="Main_swipe">
                            {displayedSlides.map((content, index) => (
                                <div key={index} className="Main_swipe_page">
                                    <div className="title">{content.pageTitle}</div>
                                    <h2>{content.h2}</h2>
                                    <h3>{content.h3}</h3>
                                    <h4>{content.h4_main}</h4>
                                    <div className="bottom">
                                        <h4>{content.bottomH4_left}</h4>
                                        <h4>{content.bottomH4_right}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
            </div>
        </div>
        <div className="Main_Right" width={260} height={360}>
                                {currentBannerImage3 ? (
                        <img
                            src={currentBannerImage3}
                            alt="랜덤 배너 이미지"
                            style={{ width: '260px', height: '360px', objectFit: 'cover'}}
                                />
                            ) : (
                                <div style={{width: '100%', height: '100%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    이미지 로딩 중...
                                </div>
                            )}
        </div>
      </div>
    </div>
  )
}

export default Main
