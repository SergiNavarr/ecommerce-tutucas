const QuienesSomos = () => {
    return (
        <div>
            <div className="flex justify-center items-center my-12">
                <h2 className="text-2xl font-semibold">Quienes somos</h2>
            </div>

            <div className="w-full border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800 my-8">
                <p className="mb-3 text-lg font-semibold">
                    Somos una tienda independiente ubicada en Corrientes Argentina que ofrece productos de alta calidad y al mejor precio.
                </p>
                <p className="mb-3 text-lg font-semibold">
                    Nuestra historia comenzó en 2018 cuando comenzamos a explorar el mercado de la ropa importada.
                </p>
                <p className="mb-3 text-lg font-semibold">
                    Desde entonces, nos enfocamos en ofrecer productos de alta calidad y precio, y nos dedicamos a brindar una experiencia única y personalizada para todos nuestros clientes.
                </p>
            </div>
        </div>
    );
}

export default QuienesSomos;