(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_4969aa._.js", {

"[project]/src/components/Snowfall.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Snowfall = ()=>{
    // Create 50 snowflakes
    const snowflakes = Array.from({
        length: 50
    }, (_, i)=>i);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "snowfall-container fixed inset-0 pointer-events-none",
        children: snowflakes.map((_, i)=>{
            const animationDuration = 5 + Math.random() * 5; // Random duration between 5-10s
            const initialDelay = Math.random() * 2; // Random delay between 0-2s
            const initialPosition = Math.random() * 100; // Random start position
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "snowflake absolute text-white",
                style: {
                    left: `${initialPosition}vw`,
                    animation: `fall ${animationDuration}s linear ${initialDelay}s infinite`,
                    fontSize: `${Math.random() * 20 + 20}px`,
                    opacity: 1,
                    textShadow: '0 0 3px black',
                    color: 'white'
                },
                children: "❄"
            }, i, false, {
                fileName: "[project]/src/components/Snowfall.tsx",
                lineNumber: 17,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/Snowfall.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = Snowfall;
const __TURBOPACK__default__export__ = Snowfall;
var _c;
__turbopack_refresh__.register(_c, "Snowfall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MovieGuessingGame.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Snowfall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Snowfall.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const MovieGuessingGame = ()=>{
    _s();
    const [movieTitles, setMovieTitles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentMovie, setCurrentMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentGuess, setCurrentGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [guessHistory, setGuessHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gameWon, setGameWon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [revealedLetters, setRevealedLetters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // Add this state
    // First useEffect for loading data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MovieGuessingGame.useEffect": ()=>{
            const loadData = {
                "MovieGuessingGame.useEffect.loadData": async ()=>{
                    try {
                        const response = await fetch('/ChristmasMovies.csv');
                        const responseText = await response.text();
                        const parsedData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(responseText, {
                            header: true,
                            skipEmptyLines: true
                        });
                        if (parsedData.data && parsedData.data.length > 0) {
                            const titles = parsedData.data.filter({
                                "MovieGuessingGame.useEffect.loadData.titles": (row)=>row.title
                            }["MovieGuessingGame.useEffect.loadData.titles"]).map({
                                "MovieGuessingGame.useEffect.loadData.titles": (row)=>row.title.toUpperCase()
                            }["MovieGuessingGame.useEffect.loadData.titles"]).filter({
                                "MovieGuessingGame.useEffect.loadData.titles": (title)=>title.length <= 12
                            }["MovieGuessingGame.useEffect.loadData.titles"]);
                            setMovieTitles(titles);
                            if (titles.length > 0) {
                                const randomMovie = titles[Math.floor(Math.random() * titles.length)];
                                setCurrentMovie(randomMovie);
                                console.log(randomMovie);
                                setCurrentGuess(Array(randomMovie.length).fill(''));
                            } else {
                                setError('No movie titles found in CSV');
                            }
                        }
                    } catch (error) {
                        setError('Error loading movie titles');
                        console.error('Error loading CSV:', error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["MovieGuessingGame.useEffect.loadData"];
            loadData();
        }
    }["MovieGuessingGame.useEffect"], []);
    const handleInputChange = (e)=>{
        if (gameWon || gameOver) return;
        const value = e.target.value.toUpperCase();
        setInputValue(value);
        const newGuess = [
            ...currentMovie
        ].map((_, index)=>{
            return value[index] || '';
        });
        setCurrentGuess(newGuess);
    };
    const revealRandomLetter = ()=>{
        // Get indices of unrevealed letters
        const unrevealedIndices = [
            ...currentMovie
        ].reduce((indices, char, index)=>{
            if (!revealedLetters[index] && char !== ' ') {
                indices.push(index);
            }
            return indices;
        }, []);
        // If there are unrevealed letters, reveal a random one
        if (unrevealedIndices.length > 0) {
            const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
            setRevealedLetters((prev)=>({
                    ...prev,
                    [randomIndex]: currentMovie[randomIndex]
                }));
        }
    };
    const checkGuess = ()=>{
        const guess = currentGuess.join('');
        const newHistory = [
            ...guessHistory,
            currentGuess
        ];
        setGuessHistory(newHistory);
        if (guess === currentMovie) {
            setGameWon(true);
            setGameOver(true);
        } else {
            revealRandomLetter(); // Add this line
            if (newHistory.length >= currentMovie.length) {
                setGameOver(true);
            }
        }
        setCurrentGuess(Array(currentMovie.length).fill(''));
        setInputValue('');
    };
    const resetGame = ()=>{
        const randomMovie = movieTitles[Math.floor(Math.random() * movieTitles.length)];
        setCurrentMovie(randomMovie);
        setCurrentGuess(Array(randomMovie.length).fill(''));
        setGuessHistory([]);
        setGameWon(false);
        setGameOver(false);
        setInputValue('');
        setRevealedLetters({}); // Reset revealed letters
    };
    // Update the GuessRow component to show revealed letters
    const GuessRow = ({ guess, isCurrentGuess = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-1 mb-2",
            children: guess.map((letter, index)=>{
                const isCorrect = !isCurrentGuess && letter === currentMovie[index];
                const isWrong = !isCurrentGuess && letter && letter !== currentMovie[index];
                const isRevealed = revealedLetters[index];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `
              relative flex items-center justify-center 
              ${getBoxStyles(currentMovie.length)}
              border-2 
              ${index % 2 === 0 ? 'border-red-500' : 'border-green-500'}
              ${isCorrect ? 'bg-green-100' : isWrong ? 'bg-red-100' : 'bg-white'}
              rounded
            `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black",
                        children: isCurrentGuess && isRevealed ? revealedLetters[index] : letter || ''
                    }, void 0, false, {
                        fileName: "[project]/src/components/MovieGuessingGame.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/MovieGuessingGame.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/MovieGuessingGame.tsx",
            lineNumber: 128,
            columnNumber: 5
        }, this);
    const getBoxStyles = (movieLength)=>{
        if (movieLength <= 4) return 'h-16 w-16 text-2xl';
        if (movieLength <= 6) return 'h-14 w-14 text-xl';
        if (movieLength <= 8) return 'h-12 w-12 text-lg';
        if (movieLength <= 10) return 'h-10 w-10 text-base';
        if (movieLength <= 12) return 'h-8 w-8 text-sm';
        return 'h-6 w-6 text-xs';
    };
    const renderContent = ()=>{
        if (isLoading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-black",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/components/MovieGuessingGame.tsx",
                lineNumber: 171,
                columnNumber: 14
            }, this);
        }
        if (error) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/MovieGuessingGame.tsx",
                lineNumber: 175,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-2 text-black",
                    children: "Guess the Christmas Movie Title!"
                }, void 0, false, {
                    fileName: "[project]/src/components/MovieGuessingGame.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: guessHistory.map((guess, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuessRow, {
                            guess: guess
                        }, index, false, {
                            fileName: "[project]/src/components/MovieGuessingGame.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/MovieGuessingGame.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                !gameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuessRow, {
                            guess: currentGuess,
                            isCurrentGuess: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/MovieGuessingGame.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: inputValue,
                            onChange: handleInputChange,
                            maxLength: currentMovie.length,
                            className: "w-full p-2 border-2 border-gray-300 rounded mb-2 text-center",
                            placeholder: "Type your guess here",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/MovieGuessingGame.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MovieGuessingGame.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: checkGuess,
                            disabled: currentGuess.some((box)=>!box) || gameOver,
                            className: "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50",
                            children: "Check Guess"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MovieGuessingGame.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: resetGame,
                            className: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",
                            children: "New Game"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MovieGuessingGame.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MovieGuessingGame.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                gameWon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-green-600 font-bold text-xl",
                    children: [
                        "Congratulations! You guessed it in ",
                        guessHistory.length,
                        " tries!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MovieGuessingGame.tsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, this),
                gameOver && !gameWon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-600 font-bold text-xl",
                    children: [
                        "Game Over! The movie was ",
                        currentMovie
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MovieGuessingGame.tsx",
                    lineNumber: 226,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-black",
                    children: [
                        "Attempts: ",
                        guessHistory.length,
                        "/",
                        currentMovie.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MovieGuessingGame.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MovieGuessingGame.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center -mt-20",
        style: {
            backgroundColor: '#fffaeb'
        },
        children: [
            gameWon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Snowfall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/MovieGuessingGame.tsx",
                lineNumber: 240,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl w-full p-6 text-stone-900",
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/src/components/MovieGuessingGame.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MovieGuessingGame.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
};
_s(MovieGuessingGame, "bCFAsuQ+iyrHC4NBfFrSF5QxDIg=");
_c = MovieGuessingGame;
const __TURBOPACK__default__export__ = MovieGuessingGame;
var _c;
__turbopack_refresh__.register(_c, "MovieGuessingGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter)
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, !1), type;
            case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                    return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {}
        }
        return "";
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
            var children = config.children;
            if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
                for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
            } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else validateChildKeys(children, type);
        } else {
            children = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
            console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
        }
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
            }
            else if (isValidElement(node)) node._store && (node._store.validated = 1);
            else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = !0;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
                var stack = describeUnknownElementTypeFrameInDEV(element.type);
                prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                return stack;
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
    }
    function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
    }
    var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/ !function(e, t) {
    "function" == typeof define && define.amd ? ((r)=>r !== undefined && __turbopack_export_value__(r))(t()) : ("TURBOPACK compile-time truthy", 1) ? module.exports = t() : ("TURBOPACK unreachable", undefined);
}(this, function s() {
    "use strict";
    var f = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f ? f : {};
    var n = !f.document && !!f.postMessage, o = f.IS_PAPA_WORKER || !1, a = {}, u = 0, b = {
        parse: function(e, t) {
            var r = (t = t || {}).dynamicTyping || !1;
            J(r) && (t.dynamicTypingFunction = r, r = {});
            if (t.dynamicTyping = r, t.transform = !!J(t.transform) && t.transform, t.worker && b.WORKERS_SUPPORTED) {
                var i = function() {
                    if (!b.WORKERS_SUPPORTED) return !1;
                    var e = (r = f.URL || f.webkitURL || null, i = s.toString(), b.BLOB_URL || (b.BLOB_URL = r.createObjectURL(new Blob([
                        "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                        "(",
                        i,
                        ")();"
                    ], {
                        type: "text/javascript"
                    })))), t = new f.Worker(e);
                    var r, i;
                    return t.onmessage = _, t.id = u++, a[t.id] = t;
                }();
                return i.userStep = t.step, i.userChunk = t.chunk, i.userComplete = t.complete, i.userError = t.error, t.step = J(t.step), t.chunk = J(t.chunk), t.complete = J(t.complete), t.error = J(t.error), delete t.worker, void i.postMessage({
                    input: e,
                    config: t,
                    workerId: i.id
                });
            }
            var n = null;
            b.NODE_STREAM_INPUT, "string" == typeof e ? (e = function(e) {
                if (65279 === e.charCodeAt(0)) return e.slice(1);
                return e;
            }(e), n = t.download ? new l(t) : new p(t)) : !0 === e.readable && J(e.read) && J(e.on) ? n = new g(t) : (f.File && e instanceof File || e instanceof Object) && (n = new c(t));
            return n.stream(e);
        },
        unparse: function(e, t) {
            var n = !1, _ = !0, m = ",", y = "\r\n", s = '"', a = s + s, r = !1, i = null, o = !1;
            !function() {
                if ("object" != typeof t) return;
                "string" != typeof t.delimiter || b.BAD_DELIMITERS.filter(function(e) {
                    return -1 !== t.delimiter.indexOf(e);
                }).length || (m = t.delimiter);
                ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (n = t.quotes);
                "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (r = t.skipEmptyLines);
                "string" == typeof t.newline && (y = t.newline);
                "string" == typeof t.quoteChar && (s = t.quoteChar);
                "boolean" == typeof t.header && (_ = t.header);
                if (Array.isArray(t.columns)) {
                    if (0 === t.columns.length) throw new Error("Option columns is empty");
                    i = t.columns;
                }
                void 0 !== t.escapeChar && (a = t.escapeChar + s);
                ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (o = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/);
            }();
            var u = new RegExp(Q(s), "g");
            "string" == typeof e && (e = JSON.parse(e));
            if (Array.isArray(e)) {
                if (!e.length || Array.isArray(e[0])) return h(null, e, r);
                if ("object" == typeof e[0]) return h(i || Object.keys(e[0]), e, r);
            } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || i), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [
                e.data
            ])), h(e.fields || [], e.data || [], r);
            throw new Error("Unable to serialize unrecognized input");
            function h(e, t, r) {
                var i = "";
                "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
                var n = Array.isArray(e) && 0 < e.length, s = !Array.isArray(t[0]);
                if (n && _) {
                    for(var a = 0; a < e.length; a++)0 < a && (i += m), i += v(e[a], a);
                    0 < t.length && (i += y);
                }
                for(var o = 0; o < t.length; o++){
                    var u = n ? e.length : t[o].length, h = !1, f = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;
                    if (r && !n && (h = "greedy" === r ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === r && n) {
                        for(var d = [], l = 0; l < u; l++){
                            var c = s ? e[l] : l;
                            d.push(t[o][c]);
                        }
                        h = "" === d.join("").trim();
                    }
                    if (!h) {
                        for(var p = 0; p < u; p++){
                            0 < p && !f && (i += m);
                            var g = n && s ? e[p] : p;
                            i += v(t[o][g], p);
                        }
                        o < t.length - 1 && (!r || 0 < u && !f) && (i += y);
                    }
                }
                return i;
            }
            function v(e, t) {
                if (null == e) return "";
                if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
                var r = !1;
                o && "string" == typeof e && o.test(e) && (e = "'" + e, r = !0);
                var i = e.toString().replace(u, a);
                return (r = r || !0 === n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || function(e, t) {
                    for(var r = 0; r < t.length; r++)if (-1 < e.indexOf(t[r])) return !0;
                    return !1;
                }(i, b.BAD_DELIMITERS) || -1 < i.indexOf(m) || " " === i.charAt(0) || " " === i.charAt(i.length - 1)) ? s + i + s : i;
            }
        }
    };
    if (b.RECORD_SEP = String.fromCharCode(30), b.UNIT_SEP = String.fromCharCode(31), b.BYTE_ORDER_MARK = "\ufeff", b.BAD_DELIMITERS = [
        "\r",
        "\n",
        '"',
        b.BYTE_ORDER_MARK
    ], b.WORKERS_SUPPORTED = !n && !!f.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = E, b.ParserHandle = r, b.NetworkStreamer = l, b.FileStreamer = c, b.StringStreamer = p, b.ReadableStreamStreamer = g, f.jQuery) {
        var d = f.jQuery;
        d.fn.parse = function(o) {
            var r = o.config || {}, u = [];
            return this.each(function(e) {
                if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && f.FileReader) || !this.files || 0 === this.files.length) return !0;
                for(var t = 0; t < this.files.length; t++)u.push({
                    file: this.files[t],
                    inputElem: this,
                    instanceConfig: d.extend({}, r)
                });
            }), e(), this;
            "TURBOPACK unreachable";
            function e() {
                if (0 !== u.length) {
                    var e, t, r, i, n = u[0];
                    if (J(o.before)) {
                        var s = o.before(n.file, n.inputElem);
                        if ("object" == typeof s) {
                            if ("abort" === s.action) return e = "AbortError", t = n.file, r = n.inputElem, i = s.reason, void (J(o.error) && o.error({
                                name: e
                            }, t, r, i));
                            if ("skip" === s.action) return void h();
                            "object" == typeof s.config && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
                        } else if ("skip" === s) return void h();
                    }
                    var a = n.instanceConfig.complete;
                    n.instanceConfig.complete = function(e) {
                        J(a) && a(e, n.file, n.inputElem), h();
                    }, b.parse(n.file, n.instanceConfig);
                } else J(o.complete) && o.complete();
            }
            function h() {
                u.splice(0, 1), e();
            }
        };
    }
    function h(e) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        }, (function(e) {
            var t = w(e);
            t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
            this._handle = new r(t), (this._handle.streamer = this)._config = t;
        }).call(this, e), this.parseChunk = function(e, t) {
            if (this.isFirstChunk && J(this._config.beforeFirstChunk)) {
                var r = this._config.beforeFirstChunk(e);
                void 0 !== r && (e = r);
            }
            this.isFirstChunk = !1, this._halted = !1;
            var i = this._partialLine + e;
            this._partialLine = "";
            var n = this._handle.parse(i, this._baseIndex, !this._finished);
            if (!this._handle.paused() && !this._handle.aborted()) {
                var s = n.meta.cursor;
                this._finished || (this._partialLine = i.substring(s - this._baseIndex), this._baseIndex = s), n && n.data && (this._rowCount += n.data.length);
                var a = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                if (o) f.postMessage({
                    results: n,
                    workerId: b.WORKER_ID,
                    finished: a
                });
                else if (J(this._config.chunk) && !t) {
                    if (this._config.chunk(n, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
                    n = void 0, this._completeResults = void 0;
                }
                return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n.data), this._completeResults.errors = this._completeResults.errors.concat(n.errors), this._completeResults.meta = n.meta), this._completed || !a || !J(this._config.complete) || n && n.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), a || n && n.meta.paused || this._nextChunk(), n;
            }
            this._halted = !0;
        }, this._sendError = function(e) {
            J(this._config.error) ? this._config.error(e) : o && this._config.error && f.postMessage({
                workerId: b.WORKER_ID,
                error: e,
                finished: !1
            });
        };
    }
    function l(e) {
        var i;
        (e = e || {}).chunkSize || (e.chunkSize = b.RemoteChunkSize), h.call(this, e), this._nextChunk = n ? function() {
            this._readChunk(), this._chunkLoaded();
        } : function() {
            this._readChunk();
        }, this.stream = function(e) {
            this._input = e, this._nextChunk();
        }, this._readChunk = function() {
            if (this._finished) this._chunkLoaded();
            else {
                if (i = new XMLHttpRequest, this._config.withCredentials && (i.withCredentials = this._config.withCredentials), n || (i.onload = v(this._chunkLoaded, this), i.onerror = v(this._chunkError, this)), i.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
                    var e = this._config.downloadRequestHeaders;
                    for(var t in e)i.setRequestHeader(t, e[t]);
                }
                if (this._config.chunkSize) {
                    var r = this._start + this._config.chunkSize - 1;
                    i.setRequestHeader("Range", "bytes=" + this._start + "-" + r);
                }
                try {
                    i.send(this._config.downloadRequestBody);
                } catch (e) {
                    this._chunkError(e.message);
                }
                n && 0 === i.status && this._chunkError();
            }
        }, this._chunkLoaded = function() {
            4 === i.readyState && (i.status < 200 || 400 <= i.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : i.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(e) {
                var t = e.getResponseHeader("Content-Range");
                if (null === t) return -1;
                return parseInt(t.substring(t.lastIndexOf("/") + 1));
            }(i), this.parseChunk(i.responseText)));
        }, this._chunkError = function(e) {
            var t = i.statusText || e;
            this._sendError(new Error(t));
        };
    }
    function c(e) {
        var i, n;
        (e = e || {}).chunkSize || (e.chunkSize = b.LocalChunkSize), h.call(this, e);
        var s = "undefined" != typeof FileReader;
        this.stream = function(e) {
            this._input = e, n = e.slice || e.webkitSlice || e.mozSlice, s ? ((i = new FileReader).onload = v(this._chunkLoaded, this), i.onerror = v(this._chunkError, this)) : i = new FileReaderSync, this._nextChunk();
        }, this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
            var e = this._input;
            if (this._config.chunkSize) {
                var t = Math.min(this._start + this._config.chunkSize, this._input.size);
                e = n.call(e, this._start, t);
            }
            var r = i.readAsText(e, this._config.encoding);
            s || this._chunkLoaded({
                target: {
                    result: r
                }
            });
        }, this._chunkLoaded = function(e) {
            this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
        }, this._chunkError = function() {
            this._sendError(i.error);
        };
    }
    function p(e) {
        var r;
        h.call(this, e = e || {}), this.stream = function(e) {
            return r = e, this._nextChunk();
        }, this._nextChunk = function() {
            if (!this._finished) {
                var e, t = this._config.chunkSize;
                return t ? (e = r.substring(0, t), r = r.substring(t)) : (e = r, r = ""), this._finished = !r, this.parseChunk(e);
            }
        };
    }
    function g(e) {
        h.call(this, e = e || {});
        var t = [], r = !0, i = !1;
        this.pause = function() {
            h.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
            h.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e) {
            this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
            i && 1 === t.length && (this._finished = !0);
        }, this._nextChunk = function() {
            this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : r = !0;
        }, this._streamData = v(function(e) {
            try {
                t.push("string" == typeof e ? e : e.toString(this._config.encoding)), r && (r = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
            } catch (e) {
                this._streamError(e);
            }
        }, this), this._streamError = v(function(e) {
            this._streamCleanUp(), this._sendError(e);
        }, this), this._streamEnd = v(function() {
            this._streamCleanUp(), i = !0, this._streamData("");
        }, this), this._streamCleanUp = v(function() {
            this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
    }
    function r(m) {
        var a, o, u, i = Math.pow(2, 53), n = -i, s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, h = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, t = this, r = 0, f = 0, d = !1, e = !1, l = [], c = {
            data: [],
            errors: [],
            meta: {}
        };
        if (J(m.step)) {
            var p = m.step;
            m.step = function(e) {
                if (c = e, _()) g();
                else {
                    if (g(), 0 === c.data.length) return;
                    r += e.data.length, m.preview && r > m.preview ? o.abort() : (c.data = c.data[0], p(c, t));
                }
            };
        }
        function y(e) {
            return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
        }
        function g() {
            return c && u && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), u = !1), m.skipEmptyLines && (c.data = c.data.filter(function(e) {
                return !y(e);
            })), _() && function() {
                if (!c) return;
                function e(e, t) {
                    J(m.transformHeader) && (e = m.transformHeader(e, t)), l.push(e);
                }
                if (Array.isArray(c.data[0])) {
                    for(var t = 0; _() && t < c.data.length; t++)c.data[t].forEach(e);
                    c.data.splice(0, 1);
                } else c.data.forEach(e);
            }(), function() {
                if (!c || !m.header && !m.dynamicTyping && !m.transform) return c;
                function e(e, t) {
                    var r, i = m.header ? {} : [];
                    for(r = 0; r < e.length; r++){
                        var n = r, s = e[r];
                        m.header && (n = r >= l.length ? "__parsed_extra" : l[r]), m.transform && (s = m.transform(s, n)), s = v(n, s), "__parsed_extra" === n ? (i[n] = i[n] || [], i[n].push(s)) : i[n] = s;
                    }
                    return m.header && (r > l.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l.length + " fields but parsed " + r, f + t) : r < l.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l.length + " fields but parsed " + r, f + t)), i;
                }
                var t = 1;
                !c.data.length || Array.isArray(c.data[0]) ? (c.data = c.data.map(e), t = c.data.length) : c.data = e(c.data, 0);
                m.header && c.meta && (c.meta.fields = l);
                return f += t, c;
            }();
        }
        function _() {
            return m.header && 0 === l.length;
        }
        function v(e, t) {
            return r = e, m.dynamicTypingFunction && void 0 === m.dynamicTyping[r] && (m.dynamicTyping[r] = m.dynamicTypingFunction(r)), !0 === (m.dynamicTyping[r] || m.dynamicTyping) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (function(e) {
                if (s.test(e)) {
                    var t = parseFloat(e);
                    if (n < t && t < i) return !0;
                }
                return !1;
            }(t) ? parseFloat(t) : h.test(t) ? new Date(t) : "" === t ? null : t) : t;
            "TURBOPACK unreachable";
            var r;
        }
        function k(e, t, r, i) {
            var n = {
                type: e,
                code: t,
                message: r
            };
            void 0 !== i && (n.row = i), c.errors.push(n);
        }
        this.parse = function(e, t, r) {
            var i = m.quoteChar || '"';
            if (m.newline || (m.newline = function(e, t) {
                e = e.substring(0, 1048576);
                var r = new RegExp(Q(t) + "([^]*?)" + Q(t), "gm"), i = (e = e.replace(r, "")).split("\r"), n = e.split("\n"), s = 1 < n.length && n[0].length < i[0].length;
                if (1 === i.length || s) return "\n";
                for(var a = 0, o = 0; o < i.length; o++)"\n" === i[o][0] && a++;
                return a >= i.length / 2 ? "\r\n" : "\r";
            }(e, i)), u = !1, m.delimiter) J(m.delimiter) && (m.delimiter = m.delimiter(e), c.meta.delimiter = m.delimiter);
            else {
                var n = function(e, t, r, i, n) {
                    var s, a, o, u;
                    n = n || [
                        ",",
                        "\t",
                        "|",
                        ";",
                        b.RECORD_SEP,
                        b.UNIT_SEP
                    ];
                    for(var h = 0; h < n.length; h++){
                        var f = n[h], d = 0, l = 0, c = 0;
                        o = void 0;
                        for(var p = new E({
                            comments: i,
                            delimiter: f,
                            newline: t,
                            preview: 10
                        }).parse(e), g = 0; g < p.data.length; g++)if (r && y(p.data[g])) c++;
                        else {
                            var _ = p.data[g].length;
                            l += _, void 0 !== o ? 0 < _ && (d += Math.abs(_ - o), o = _) : o = _;
                        }
                        0 < p.data.length && (l /= p.data.length - c), (void 0 === a || d <= a) && (void 0 === u || u < l) && 1.99 < l && (a = d, s = f, u = l);
                    }
                    return {
                        successful: !!(m.delimiter = s),
                        bestDelimiter: s
                    };
                }(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess);
                n.successful ? m.delimiter = n.bestDelimiter : (u = !0, m.delimiter = b.DefaultDelimiter), c.meta.delimiter = m.delimiter;
            }
            var s = w(m);
            return m.preview && m.header && s.preview++, a = e, o = new E(s), c = o.parse(a, t, r), g(), d ? {
                meta: {
                    paused: !0
                }
            } : c || {
                meta: {
                    paused: !1
                }
            };
        }, this.paused = function() {
            return d;
        }, this.pause = function() {
            d = !0, o.abort(), a = J(m.chunk) ? "" : a.substring(o.getCharIndex());
        }, this.resume = function() {
            t.streamer._halted ? (d = !1, t.streamer.parseChunk(a, !0)) : setTimeout(t.resume, 3);
        }, this.aborted = function() {
            return e;
        }, this.abort = function() {
            e = !0, o.abort(), c.meta.aborted = !0, J(m.complete) && m.complete(c), a = "";
        };
    }
    function Q(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(j) {
        var z, M = (j = j || {}).delimiter, P = j.newline, U = j.comments, q = j.step, N = j.preview, B = j.fastMode, K = z = void 0 === j.quoteChar || null === j.quoteChar ? '"' : j.quoteChar;
        if (void 0 !== j.escapeChar && (K = j.escapeChar), ("string" != typeof M || -1 < b.BAD_DELIMITERS.indexOf(M)) && (M = ","), U === M) throw new Error("Comment character same as delimiter");
        !0 === U ? U = "#" : ("string" != typeof U || -1 < b.BAD_DELIMITERS.indexOf(U)) && (U = !1), "\n" !== P && "\r" !== P && "\r\n" !== P && (P = "\n");
        var W = 0, H = !1;
        this.parse = function(i, t, r) {
            if ("string" != typeof i) throw new Error("Input must be a string");
            var n = i.length, e = M.length, s = P.length, a = U.length, o = J(q), u = [], h = [], f = [], d = W = 0;
            if (!i) return L();
            if (j.header && !t) {
                var l = i.split(P)[0].split(M), c = [], p = {}, g = !1;
                for(var _ in l){
                    var m = l[_];
                    J(j.transformHeader) && (m = j.transformHeader(m, _));
                    var y = m, v = p[m] || 0;
                    for(0 < v && (g = !0, y = m + "_" + v), p[m] = v + 1; c.includes(y);)y = y + "_" + v;
                    c.push(y);
                }
                if (g) {
                    var k = i.split(P);
                    k[0] = c.join(M), i = k.join(P);
                }
            }
            if (B || !1 !== B && -1 === i.indexOf(z)) {
                for(var b = i.split(P), E = 0; E < b.length; E++){
                    if (f = b[E], W += f.length, E !== b.length - 1) W += P.length;
                    else if (r) return L();
                    if (!U || f.substring(0, a) !== U) {
                        if (o) {
                            if (u = [], I(f.split(M)), F(), H) return L();
                        } else I(f.split(M));
                        if (N && N <= E) return u = u.slice(0, N), L(!0);
                    }
                }
                return L();
            }
            for(var w = i.indexOf(M, W), R = i.indexOf(P, W), C = new RegExp(Q(K) + Q(z), "g"), S = i.indexOf(z, W);;)if (i[W] !== z) if (U && 0 === f.length && i.substring(W, W + a) === U) {
                if (-1 === R) return L();
                W = R + s, R = i.indexOf(P, W), w = i.indexOf(M, W);
            } else if (-1 !== w && (w < R || -1 === R)) f.push(i.substring(W, w)), W = w + e, w = i.indexOf(M, W);
            else {
                if (-1 === R) break;
                if (f.push(i.substring(W, R)), D(R + s), o && (F(), H)) return L();
                if (N && u.length >= N) return L(!0);
            }
            else for(S = W, W++;;){
                if (-1 === (S = i.indexOf(z, S + 1))) return r || h.push({
                    type: "Quotes",
                    code: "MissingQuotes",
                    message: "Quoted field unterminated",
                    row: u.length,
                    index: W
                }), T();
                if (S === n - 1) return T(i.substring(W, S).replace(C, z));
                if (z !== K || i[S + 1] !== K) {
                    if (z === K || 0 === S || i[S - 1] !== K) {
                        -1 !== w && w < S + 1 && (w = i.indexOf(M, S + 1)), -1 !== R && R < S + 1 && (R = i.indexOf(P, S + 1));
                        var O = A(-1 === R ? w : Math.min(w, R));
                        if (i.substr(S + 1 + O, e) === M) {
                            f.push(i.substring(W, S).replace(C, z)), i[W = S + 1 + O + e] !== z && (S = i.indexOf(z, W)), w = i.indexOf(M, W), R = i.indexOf(P, W);
                            break;
                        }
                        var x = A(R);
                        if (i.substring(S + 1 + x, S + 1 + x + s) === P) {
                            if (f.push(i.substring(W, S).replace(C, z)), D(S + 1 + x + s), w = i.indexOf(M, W), S = i.indexOf(z, W), o && (F(), H)) return L();
                            if (N && u.length >= N) return L(!0);
                            break;
                        }
                        h.push({
                            type: "Quotes",
                            code: "InvalidQuotes",
                            message: "Trailing quote on quoted field is malformed",
                            row: u.length,
                            index: W
                        }), S++;
                    }
                } else S++;
            }
            return T();
            "TURBOPACK unreachable";
            function I(e) {
                u.push(e), d = W;
            }
            function A(e) {
                var t = 0;
                if (-1 !== e) {
                    var r = i.substring(S + 1, e);
                    r && "" === r.trim() && (t = r.length);
                }
                return t;
            }
            function T(e) {
                return r || (void 0 === e && (e = i.substring(W)), f.push(e), W = n, I(f), o && F()), L();
            }
            function D(e) {
                W = e, I(f), f = [], R = i.indexOf(P, W);
            }
            function L(e) {
                return {
                    data: u,
                    errors: h,
                    meta: {
                        delimiter: M,
                        linebreak: P,
                        aborted: H,
                        truncated: !!e,
                        cursor: d + (t || 0)
                    }
                };
            }
            function F() {
                q(L()), u = [], h = [];
            }
        }, this.abort = function() {
            H = !0;
        }, this.getCharIndex = function() {
            return W;
        };
    }
    function _(e) {
        var t = e.data, r = a[t.workerId], i = !1;
        if (t.error) r.userError(t.error, t.file);
        else if (t.results && t.results.data) {
            var n = {
                abort: function() {
                    i = !0, m(t.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    });
                },
                pause: y,
                resume: y
            };
            if (J(r.userStep)) {
                for(var s = 0; s < t.results.data.length && (r.userStep({
                    data: t.results.data[s],
                    errors: t.results.errors,
                    meta: t.results.meta
                }, n), !i); s++);
                delete t.results;
            } else J(r.userChunk) && (r.userChunk(t.results, n, t.file), delete t.results);
        }
        t.finished && !i && m(t.workerId, t.results);
    }
    function m(e, t) {
        var r = a[e];
        J(r.userComplete) && r.userComplete(t), r.terminate(), delete a[e];
    }
    function y() {
        throw new Error("Not implemented.");
    }
    function w(e) {
        if ("object" != typeof e || null === e) return e;
        var t = Array.isArray(e) ? [] : {};
        for(var r in e)t[r] = w(e[r]);
        return t;
    }
    function v(e, t) {
        return function() {
            e.apply(t, arguments);
        };
    }
    function J(e) {
        return "function" == typeof e;
    }
    return o && (f.onmessage = function(e) {
        var t = e.data;
        void 0 === b.WORKER_ID && t && (b.WORKER_ID = t.workerId);
        if ("string" == typeof t.input) f.postMessage({
            workerId: b.WORKER_ID,
            results: b.parse(t.input, t.config),
            finished: !0
        });
        else if (f.File && t.input instanceof File || t.input instanceof Object) {
            var r = b.parse(t.input, t.config);
            r && f.postMessage({
                workerId: b.WORKER_ID,
                results: r,
                finished: !0
            });
        }
    }), (l.prototype = Object.create(h.prototype)).constructor = l, (c.prototype = Object.create(h.prototype)).constructor = c, (p.prototype = Object.create(p.prototype)).constructor = p, (g.prototype = Object.create(h.prototype)).constructor = g, b;
});
}}),
}]);

//# sourceMappingURL=_4969aa._.js.map