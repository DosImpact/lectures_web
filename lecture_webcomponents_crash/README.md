## ref 

https://www.youtube.com/watch?v=PCWaFLy3VUo  

## 웹컴포넌트란  

웹플렛폼의 API들의 셋이다.  
- 커스터 마이징, 재사용, 캡슐화된 HTML태그 만들어낸다.   
- Custom Elements, Shadow DOM, HTML Templates  

## 제작 과정  
- 커스텀 태그 만들기  
- 커스텀 태그 클래스 만들기  
- 라이플 사이클 매서드 사용 가능


## 라이플 싸이클 함수들   
- constructor() : 인스턴스화 될때     
- connectedCallback() : DOM연결시   
- disconnectedCallback():    
- attributeChangedCallback(attrName,oldVal,newVal)  


## 쉐도우돔
- 섀도우 DOM은 DOM의 구조를 가지고 있으나, 외부에 노출되지 않은 DOM을 말하며 DOM의 구조를 캡슐화할 때 사용한다.
- 스타일과 마크업이 캡슐화 되어 있다.    
- Create : element.attachShadow({mode:open})  
- Create : shadowRoot - for interact, Reference


## HTML 템플릿  
- 캡슐화된 HTML탬플릿 작성
- HTML+CSS+변수로 생성함  


