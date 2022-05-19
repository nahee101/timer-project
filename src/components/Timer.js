import React from "react";


const TimerFunction = () => {
      /* 타이머 */
    // 처음 상태: 00분 00초 00밀리초
    const [time, setTime] = React.useState(0);
    // timerOn: 타이머 시작 -> 처음 상태: false여야
    const [timerOn, setTimeOn] = React.useState(false);

    /* 타이머 */
    // 타이머가 변경될 때마다 사용
    React.useEffect(() => {
        let interval = null;

        // 타이머 켜고 끄는
        if(timerOn) {
        // 타이머를 켤 때 interval 초기화
        interval = setInterval(() => {
            // 10밀리초마다 
            setTime(prevTime => prevTime +10)
        }, 10)
        } else {
        // 컴포넌트 재렌더링 / ...
        clearInterval(interval)
        };

        /* 타이머 */
        // 타이머 정리
        return () => clearInterval(interval)
    }, [timerOn])

    return (
        <div className="Timers">
        <h2>스톱워치</h2>
        <div id="display">
            <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div id="buttons">
            {!timerOn && time === 0 && (
            <button onClick={() => setTimeOn(true)}>시작</button>
            )}
            {timerOn && (
            <button onClick={() => setTimeOn(false)}>정지</button>
            )}
            {!timerOn && time !== 0 && (
            <button onClick={() => setTimeOn(true)}>이어하기</button>
            )}
            {!timerOn && time > 0 && (
            <button onClick={() => setTime(0)}>초기화</button>
            )}
        </div>
        </div>
    );
};

export default TimerFunction;