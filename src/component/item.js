const Item = (number) => {
    switch(number) {
        case 1:
        return ({
            keyword: ['Javascript', 'C', 'C++', 'Objective-C'],
            name: 'VestCert / SKCertService',
            date: '개발: 2014.09 ~ 2016.12 / 유지보수: 2015.03 ~',
            info: 'PKI 기반 공인 인증 프로그램',
            skill: 'Javascript, Html, CSS, Gulp, AJAX, C, C++, Objective-C',
            text: [
                '퍼블리셔가 제공한 결과물을 바탕으로 UI/UX 고도화', 
                'PKCS 스펙 기반의 공인인증 로직 구현',
                '웹과 네이티브 통신(AJAX)을 위한 기능 스팩 구현(JSON 전문)',
                '키보드 보안 E2E 연동',
                '통합 테스트 구현'],
            etc: '',
        })
        break;
        case 2:
        return ({
            keyword: ['Javascript'],
            name: 'Dill',
            date: '개발: 2017.01 ~ 2017.03',
            info: '모바일 환경에서 사용하는 가상 키패드',
            skill: 'Javascript, Html, SVG, WebCrypto',
            text: [
                '요구사항을 바탕으로 가상 키패드 컨셉 정의', 
                'UI / UX 구현',
                'WebCrypto를 활용한 암호화'],
            etc: '',
        })
        break;
        case 3:
        return({
            keyword: ['Objective-C'],
            name: 'KoreaMintLib - ios',
            date: '개발: 2018.02 ~ 2018.03',
            info: '모바일 환경용 PKI 기반 공인 인증 라이브러리',
            skill: 'Objective-C, KeyChain, WKWebView',
            text: [
                'webview를 통한 웹간 통신 구현',
                'keychain을 활용한 데이터 저장',
                '생체인식(지문, 안면) 연동 기능 구현',
                'PKCS 스펙 기반의 공인 인증 로직 구현'],
            etc: '',
        })
        break;
        case 4:
        return({
            keyword: ['Javascript'],
            name: 'Hibiscus',
            date: '개발: 2018.04 ~ 2018.06 (프로토타입)',
            info: '공통 도메인을 기반으로 하는 PKI 기반의 공인 인증 모듈',
            skill: 'Javascript, Html, CSS, Webpack, ES6',
            text: [
                'PKCS 스펙 기반의 공인 인증 로직 구현',
                '외부에서 사용 가능한 API 정의',
                '크로스 토메인 간 통신 구현'],
            etc: '',
        })
        break;
        case 5:
        return({
            keyword: ['Javascript'],
            name: 'Vikie',
            date: '개발: 2018.06',
            info: '웹, 모바일에서 사용되는 패턴락 구현',
            skill: 'Javascript, SVG, WebCrypto',
            text: [
                'SVG를 이용한 패턴 락 UI 구현 및 기능 구현',
                'WebCrypto를 활용한 암호화'],
            etc: '',
        })
        break;
        case 6:
        return({
            keyword: ['Objective-C'],
            name: 'VestPin - ios',
            date: '2018.06 ~ 2018.07',
            info: 'PKI를 대체한 간편인증 모듈',
            skill: 'Javascrtip, Objective-C, KeyChain, WKWeView',
            text: [
                'webview를 통한 웹간 통신 구현',
                'keychain을 활용한 데이터 저장'],
            etc: '',
        })
        break;
    }
}

export default Item;