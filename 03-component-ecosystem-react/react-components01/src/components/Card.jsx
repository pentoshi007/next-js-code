function Card({ title, description, image, buyNow, details }) {
    return (
        <div className="max-w-sm w-full border-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden">
            <div className="relative overflow-hidden group">
                <img
                    src="https://picsum.photos/400/300"
                    alt="random image"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed ">
                    {description}
                </p>

                <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95">
                        {buyNow}
                    </button>
                    <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200">
                        {details}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;