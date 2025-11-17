import React, {useState} from 'react'
import JKlogo from '../../assets/img/jobkorealogo.gif'
import Banner1 from '../../assets/img/HeaderBanner1.png'
const Header = () => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className='Header_wrap'>
      <a href="https://www.jobkorea.co.kr/Theme/matchingbank"><div className="Header_banner1"><img src={Banner1} alt=""  width={1080} height={80}/></div></a>
      <div className="Header_inner">
      <div className="Header_top">
        <div className='Header_box1'>
        <div className="Header_toLeft">
          <a href=""><img src={JKlogo} alt="" width={141} height={70}/></a>
        </div>
        <div className="Header_tomiddle">
          <div className="Header_search">
            <input type="text" placeholder='NEW JOB, NEW ME' maxLength={30} />
          </div>
        </div>
        </div>
        <div className="Header_toRight">
          <a href="https://www.albamon.com/" className="Header_albamon">알바몬</a>
          <a href="https://www.gamejob.co.kr/main/home" className="Header_gamejob">게임잡</a>
          <a href="https://www.ninehire.com/" className="Header_ninehire">나인하이어</a>
          <a href="https://www.klik.co.kr/?utm_source=jk_pc&utm_medium=banner&utm_campaign=fam_site/" className="Header_klik">클릭</a>          
        </div>
      </div>
      <div className="Header_bottom">
        <div className="Header_boLeft" onMouseEnter={() => setIsDropdownVisible(true)} onMouseLeave={() => setIsDropdownVisible(false)}>
          <a href="https://www.jobkorea.co.kr/recruit/joblist?menucode=local&localorder=1"><span>채용정보</span></a>
          <a href="https://www.jobkorea.co.kr/OnePick/JobList?Ord=GcmCodeAmtDesc"><span>합격축하금</span></a>
          <a href="https://www.jobkorea.co.kr/starter/"><span>공채정보</span></a>
          <a href="https://www.jobkorea.co.kr/theme/entry-level-internship"><span>신입·인턴</span></a>
          <a href="https://www.jobkorea.co.kr/Review/Home"><span>기업·연봉</span></a>
          <a href="https://www.jobkorea.co.kr/goodjob/tip"><span>취업전략</span></a>
          <a href="https://www.jobkorea.co.kr/User/Qstn/Index"><span>취업톡톡</span></a> 
           {isDropdownVisible && (
              <div className="Header_dropmenu">
                <div>
                <div className="Header_dropmenu_left">
                  <h3>나에게 딱 맞는 공고</h3>
              <div>
                <div className="Header_dropmenubox1">
                <ul className='Header_service1'>
                  <li><a href="/service1"><h1>채용 탐색</h1></a></li>
                  <li><a href="/service2"><h2>지역별 공고</h2></a></li>
                  <li><a href="/service2"><h2>직무별 공고</h2></a></li>
                  <li><a href="/service2"><h2>산업별 공고</h2></a></li>
                  <li><a href="/service2"><h2>기업별 공고</h2></a></li>
                  <li><a href="/service2"><h2>TOP100 공고</h2></a></li>
                  <li><a href="/service2"><h2>AI 전문직 공고</h2></a></li>
                  <li><a href="/service2"><h2>반도체·이차전지 공고</h2></a></li>
                </ul>
                <ul className='Header_service2'>
                  <li><a href="/service1"><h1>전문 채용</h1></a></li>
                  <li><a href="/service2"><h2>전문채용관</h2></a></li>
                </ul>
                <ul className='Header_service3'>
                  <li><a href="/service1"><h1>채용 대행</h1></a></li>
                  <li><a href="/service2"><h2>헤드헌팅 공고</h2></a></li>
                </ul>
              </div>
                <div className="Header_dropmenubox2">
                <ul className='Header_service4'>
                  <li><a href="/service1"><h1>합격축하금 원픽</h1></a></li>
                  <li><a href="/service2"><h2>합격축하금 공고</h2></a></li>
                  <li><a href="/service2"><h2>원픽서비스 안내</h2></a></li>
                </ul>
                <ul className='Header_service5'>
                  <li><a href="/service1"><h1>공채정보</h1></a></li>
                  <li><a href="/service2"><h2>1000대기업 공채</h2></a></li>
                  <li><a href="/service2"><h2>공채 달력</h2></a></li>
                  <li><a href="/service2"><h2>공공기관 채용일정</h2></a></li>
                </ul>
                <ul className='Header_service6'>
                  <li><a href="/service1"><h1>신입·인턴</h1></a></li>
                  <li><a href="/service2"><h2>신입·인턴공고</h2></a></li>
                </ul>
              </div>
              </div>
              </div>
              <div className="Header_dropmenu_middle">
                <h3>콘텐츠 탐색</h3>
                <div>
                <div className="Header_dropmenubox3">
                <ul className='Header_service7'>
                  <li><a href="/service1"><h1>기업·연봉</h1></a></li>
                  <li><a href="/service2"><h2>기업리뷰</h2></a></li>
                  <li><a href="/service2"><h2>기업분석 보고서</h2></a></li>
                  <li><a href="/service2"><h2>슈퍼기업관</h2></a></li>
                  <li><a href="/service2"><h2>연봉</h2></a></li>
                </ul>
              </div>
                <div className="Header_dropmenubox4">
                <ul className='Header_service8'>
                  <li><a href="/"><h1>커리어 소식</h1></a></li>
                  <li><a href="/"><h2>콘텐츠LAB</h2></a></li>
                  <li><a href="/"><h2>합격자소서</h2></a></li>
                  <li><a href="/"><h2>인적성·면접 후기</h2></a></li>
                  <li><a href="/"><h2>직무 인터뷰</h2></a></li>
                </ul>
                <ul className='Header_service9'>
                  <li><a href="/"><h1>실전공략</h1></a></li>
                  <li><a href="/"><h2>인성역량검사</h2></a></li>
                  <li><a href="/"><h2>공기업 모의고사</h2></a></li>
                  <li><a href="/"><h2>역량테스트 MICT</h2></a></li>
                </ul>
                <ul className='Header_service10'>
                  <li><a href=""><h1>취업 TOOL</h1></a></li>
                  <li><a href="/"><h2>취업 TOOL</h2></a></li>
                  <li><a href="/"><h2>문서서식 자료</h2></a></li>
                </ul>
              </div>
                <div className="Header_dropmenubox5">
                <ul className='Header_service11'>
                  <li><a href="/"><h1>커리어 고민</h1></a></li>
                  <li><a href="/"><h2>취업톡톡</h2></a></li>
                </ul>
              </div>
              </div>
              </div>
              <div className="Header_dropmenu_right">
                <h3>잡코리아 회언이 아니라면?</h3>
                <div className="Header_dropmenubox6">
                <ul className='Header_service12'>
                  <div>
                  <h2>간단 프로필 등록하고</h2>
                  <li><a href=""><h1>포지션 제안 받아보기 &gt;</h1></a></li>
                  </div>
                </ul>
                <ul className="Header_service13">
                  <li><a href="/service1"><h1>개인회원 홈</h1></a></li>
                  <li><a href="/service2"><h2>이력서 관리</h2></a></li>
                  <li><a href="/service2"><h2>입사지원 현황</h2></a></li>
                  <li><a href="/service2"><h2>포지션 제안</h2></a></li>
                  <li><a href="/service2"><h2>스크랩 공고</h2></a></li>
                  <li><a href="/service2"><h2>개인정보 수정</h2></a></li>
                </ul>
              </div>
              </div>
              </div>
              <div className="Header_dropmenu_bottom">
                <h4>자주하는 질문 FAQ🤔</h4>
                <h4>주요 소식은 공지사항📢</h4>
                <h4>도움이 필요할 땐 고객센터🎧</h4>
                <h4>혜택 가득 이벤트🎁</h4>
              </div>
              </div>
            )}      
        </div>
        <div className="Header_boRight">
          <div className="Header_login">
            <a href="https://www.jobkorea.co.kr/Login/Login_Tot.asp?rDBName=GG&re_url=/">로그인</a>
            <a href="https://www.jobkorea.co.kr/Join/M_Regist">회원가입</a>
           <a href="https://www.jobkorea.co.kr/Corp/Index"><div className="Header_service">기업서비스</div></a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header
