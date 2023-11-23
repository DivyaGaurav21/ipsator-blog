const NextPrevBtn = () => {
    return (
        <div>
            <button
                type="button"
                className="text-red-700 border border-red-600 rounded-full w-12 h-12
                 hover:bg-red-700 hover:text-white focus:bg-red-800 mr-3"
            >
                <span className="font-bold text-2xl">&lt;</span>
            </button>
            <button
                type="button"
                className="text-red-700 border border-red-600 rounded-full w-12 h-12
                 hover:bg-red-700 hover:text-white focus:bg-red-800"
            >
                <span className="font-bold text-2xl">&gt;</span>
            </button>
        </div>
    )
}

export default NextPrevBtn