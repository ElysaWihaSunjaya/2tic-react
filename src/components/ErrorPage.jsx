export default function ErrorPage({ code, description, image }) {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center p-8"
            style={{
                backgroundImage: image ? `url(${image})` : "none",
            }}
        >
            <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-12 text-center max-w-3xl">
                <h1 className="text-9xl font-extrabold text-red-700 drop-shadow-lg">{code}</h1>
                <p className="text-3xl font-medium text-gray-800 mt-4">{description}</p>
            </div>
        </div>
    );
}
