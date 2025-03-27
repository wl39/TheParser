let temp = ```## [문제 1]

자료의 형태별로 최적의 정렬 알고리즘을 짝지었을 때, **옳게 짝지어진 모든 번호**를 고르시오. (여러 개를 고를 수 있음)

1. 길이가 모두 같은 문자열 정렬 → 기수 정렬(Radix Sort)
2. 어느 정도 정렬이 되어있는 배열 → 삽입 정렬(Insertion Sort)
3. 데이터가 매우 많은 경우(10만 개 이상)  → 힙 정렬(Heap Sort)
4. 정렬 기준이 2개 일 때 → 퀵 정렬(Quick Sort)
5. 중복이 매우 많은 데이터 → 퀵 정렬(Quick Sort)

---

## [문제 2]

다음은 세마포어(Semaphore)에 대한 설명이다. 이 중에서 **옳지 않은 것**을 **1개** 고르시오.

1. ??? (_추정: ‘크리티컬 섹션에 들어간 프로세스만 해제 가능하다’ 등_)
2. 이진 세마포어(Binary Semaphore)는 동시에 최대 N개의 스레드가 사용할 수 있다.
3. 외부 프로세스가 임의로 세마포어를 해제할 수 없다.
4. ??? (_추정: 세마포어는 상호 배제를 보장하는 도구이다 등_)

---

## [문제 3]

해당 코드를 실행하면 아래의 트리를 어떻게 순회하나요?

> - 트리 그림 제시
> - stack을 이용한 DFS, 오른쪽 자식을 먼저 push해서 왼쪽으로 깊이 탐색

1. 코드는 스택을 이용해 DFS 순회를 구현한다.
2. 스택에 넣을 때 오른쪽 자식 노드를 먼저 푸시한다.
3. 루트에서 시작해 왼쪽 자식 노드로 연속 방문이 가능하다.
4. (코드 내용 관련 기타 설명: _추정_)

> **[참고 코드]**
> 
> java
> // 실제 시험에는 Java 코드가 주어짐
> // right 자식을 먼저 push, 그 뒤 left 자식 push → 왼쪽 자식부터 방문
> 
> 
> (정확한 코드 전문은 기억나지 않아 _추정_)

---

## [문제 4]

HTTP 1.1과 HTTP 2.0의 특징에 대해 옳은 설명만을 모두 고르시오. (여러 개 가능)

1. HTTP/1.1에서 keep-alive(지속 연결)를 사용하려면 요청 헤더에 Connection: keep-alive를 명시적으로 추가해야 한다.
2. HTTP/1.1은 HOL(Head-of-Line) 블로킹이 발생할 수 있다. (_추정_)
3. HTTP/2.0은 멀티플렉싱(multiplexing)을 지원한다. (_추정_)
4. HTTP/2.0은 무조건 UDP를 사용하기 때문에 TCP 기반 연결 지연이 없다. (_추정_)

---

## [문제 5]

HTTP/2.0의 특징으로 **옳지 않은 것**을 고르시오. (1개)

1. 헤더 압축을 통해 전송 효율을 높였다.
2. 하나의 TCP 연결에서 멀티플렉싱을 할 수 있다. (_추정_)
3. UDP를 활용하여 기존 대비 성능 개선을 가능하게 했다.
4. 서버 푸시(Server Push)를 지원한다. (_추정_)

---

## [문제 6]

HTTP/TCP의 Keep-Alive 기능에 관해 다음 중 **옳지 않은 것**을 고르시오. (1개 선택)

1. HTTP/1.1에서는 keep-alive를 반드시 헤더에 명시해야만 동작한다.
2. TCP Keep-Alive는 연결이 유효한지 일정 주기로 확인한다. (_추정_)
3. HTTP/1.1 기본 동작이 지속 연결이므로, 별도의 헤더 지정을 안 해도 Keep-Alive가 가능하다.
4. Keep-Alive를 사용하면 클라이언트와 서버 간 연결 설정에 드는 오버헤드를 줄일 수 있다. (_추정_)

---

## [문제 7]

TCP Fast Open, TCP Keep-Alive, 0-RTT(Zero Round Trip) 연결의 **공통점**을 가장 잘 설명한 것을 고르시오. (1개)

1. 한 번 연결을 맺은 후 동일 세션을 재활용하여 핸드셰이크 오버헤드를 줄인다. (_추정_)
2. 각각 UDP 기반 전송이므로 혼잡제어가 필요 없다. (_추정_)
3. 멀티플렉싱을 통해 여러 요청을 한 번에 전송한다. (_추정_)
4. 애플리케이션 계층에서만 동작하는 최적화 기법이다. (_추정_)

---

## [문제 8]

서버-클라이언트 간 연결이 끊어졌고, 클라이언트 측에서 TIME_WAIT 상태를 유지하고 있다.  
다음 설명 중 **옳은 것**을 모두 고르시오. (문항에서는 한 개만 고르는 것으로 추정)

1. 클라이언트가 서버측으로 먼저 연결 RST 패킷을 보냈음을 의미한다.
2. 서버가 클라이언트측으로 먼저 연결 RST 패킷을 보냈음을 의미한다.
3. TIME_WAIT 상태에서는 해당 소켓의 포트를 즉시 재사용할 수 있다. (_추정_)
4. TIME_WAIT 상태는 일정 시간이 지나면 자동으로 CLOSED 상태가 된다. (_추정_)
```;

function parseData(rawInput) {
  const blocks = rawInput.split(/---/);
  return blocks
    .map((block) => {
      const lines = block.trim().split("\n");
      const question = lines[0].replace(/^\[.*?\]\s*/, "").trim();
      const options = lines.slice(1).map((line) => {
        const match = line.match(/^(\d+)\.\s*(.*?)\s*→\s*(.*)$/);
        return {
          number: parseInt(match[1]),
          description: match[2].trim(),
          algorithm: match[3].trim(),
        };
      });
      return { question, options };
    })
    .filter((item) => item.question && item.options.length > 0);
}

console.log(parseData(temp));
