// 버튼에 onclick 함수를 입력 후
// 함수를 실행시키기 위해서 버튼을 클릭 합니다
function typeTest(){
    console.log('출력');
    // alert('출력');
    // document.write('typeTest');

    // 변수를 선언시 사용되는 키워드
    // var, let, const(상수)

    // 숫자형: 정수와 실수를 포함
    let age=20;
    let height=184.5;

    // 문자열: 작은따옴표, 큰 따옴표로 묶은 데이터
    let name='문인수';
    let name1="문인수";
    let name2=""; // 빈 문자열

    // 논리값: true, false
    let check = false;

    // 박스 선택
    let area1 = document.getElementById('area1');
    // 박스에 값을 입력
    area1.innerHTML='<h3>안녕하세요</h3>';
    // Template literals 템플릿 리터럴: "", '' 대신 ``(백틱)을 사용하여 변수를 함께 출력
    area1.innerHTML+=`name: ${name}, type: ${typeof(name)} <br>`;
    area1.innerHTML+=`age: ${age}, type: ${typeof(age)} <br>`;
    area1.innerHTML+=`height: ${height}, type: ${typeof(height)} <br>`;
    area1.innerHTML+=`check: ${check}, type: ${typeof(check)} <br>`;
        }


function typeTest2(){
    // 배열 선언
    let hobbies =['축구', '농구','야구'];
    let area2 = document.getElementById('area2');
    area2.innerHTML ='<h3>객체 테스트</h3>';
    area2.innerHTML += `hobbies: ${hobbies}, type: ${typeof(hobbies)} <br>`;

    // 익명의 함수 선언
    // 초기값 지정
    // 변수에 함수를 저장 할 수도 있고 매개변수로 함수를 넘겨줄 수도 있습니다
    // let testFunc = function(num1, num2){
        // 매개변수의 갯수가 일치하지 않은 경우 undefined 입력되므로 오류가 발생 -> 초기값 지정
    let testFunc = function(num1=0, num2=0){
         console.log('num1', num1);
         console.log('num2', num2);
        return num1 + num2;
    }
    // 함수를 실행: 변수이름(매개변수)
    console.log('testFunc', testFunc(10,20));    // testFunc 30
    // 매개변수의 갯수가 일치하지 않아도 실행
    console.log('testFunc', testFunc());   // testFunc NaN / undefined

    area2.innerHTML += `testFunc: ${testFunc}, type: ${typeof(testFunc)}<br>`;


    // 객체 타입
    let user = {
        // 속성: 값, 속성: 값, ...
        name: '문인수',
        age: 20,
        height: 184.5,
        id : 'test',
        hobbies: ['축구','농구','야구']
    }

    console.log(user);
    console.log(user.name);

    area2.innerHTML +=`user: ${user}, type: ${typeof(user)} <br>`;  // type: object
    area2.innerHTML +=`null: ${null}, type: ${typeof(null)} <br>`;  // type: object
    area2.innerHTML +=`undefined: ${undefined}, type: ${typeof(undefined)} <br>`;  // type: undefined
        }


    function castingTest(){
        let area4 = document.getElementById('area4');

        area4.innerHTML=`${2 + Number('3')} <br>`;    // 5
        area4.innerHTML=`${String(2) + Number('3')} <br>`;    // 23
        area4.innerHTML=`${2 + parseInt('3')} <br>`;    // 5
        area4.innerHTML=`${2 + parseFloat('3')} <br>`;    // 5

        // 16진수를 10진수로 변환
        // ff: 255
        area4.innerHTML +=`${parseInt('ff',16)}`;
    }

    function opTest(){
        let area5 = document.getElementById('area5');
        area5.innerHTML='"==" 연산자 테스트 <br>';
        area5.innerHTML+=`7==7:${7==7} <br>`;
        area5.innerHTML+=`7=="7":${7=="7"} <br>`;
        area5.innerHTML+=`7!="7":${7!="7"} <br>`;
        area5.innerHTML+=`'7'!="7":${'7'!="7"} <br>`;


        area5.innerHTML +='<br>"===" 연산자 테스트 <br>';
        area5.innerHTML+=`7===7:${7===7} <br>`;
        area5.innerHTML+=`7==="7":${7==="7"} <br>`;
        area5.innerHTML+=`7!=="7":${7!=="7"} <br>`;
        area5.innerHTML+=`'7'!="7":${'7'!="7"} <br>`;
    }

    function forTest(){
        // 1~10까지 수를 담고 있는 배열 array
        let array =[1,2,3,4,5,6,7,8,9,10];
        let array2=[10,9,8,7,6,5];
        // 출력
        for(let i=0; i<array.length; i++){
            console.log(array[i]);
        }
        console.log('for===============');

        // for(변수 in 객체){}
        // 반복문 - 객체 키와 값 가져오기
        // 반복 변수에 array2의 index를 순서대로 담아서 반복시킨다
        // object.속성명, 객체명[속성명]
        for(let i in array2){
            console.log(array2[i]);
        }
        let student = {
            name: '고경희',
            age: 20,
            class: '1'
        }
        // 객체의 속성, 속성값을 출력
        for(key in student){
            console.log(key,student[key]);
            // console.log(key,student.key); err -> 객체명.속성명 -> 속성값을 알고 있을 때 사용 이처럼 모를 때 못가져온다
        }
        console.log('for in ===============');

        // 배열.forEach(function(변수){})
        // 배열의 요소(array)를 함수의 매개변수(num)로 전달
        array.forEach(function(num){
            console.log(num);
        });
        console.log('for each ===============');

        let i=0;
        while(true){
            i++;
            if(i%2==0){
                continue;   // 홀수이면 continue
            }
            console.log(i);  // 짝수이면 출력
            if(i>5){
                break;
            }
        }
        console.log('while ===========');

        // Es6부터 추가된 for 문
        for(let iterator of array){
            console.log(iterator);
        }
    }