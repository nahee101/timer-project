import React from "react";

const DarkModeFunction = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div>
            <button onClick={() => setDarkMode(!darkMode)}>다크모드 끄고 켜기</button>
        </div>
    )
};

export default DarkModeFunction;