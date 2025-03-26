export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 x-50 bg-black/50 flex items-center justify-center">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-xl relative overflow-y-auto max-h-[100vh]">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 bg-gray-200 rounded-lg px-2 py-1 font-semibold cursor-pointer"
                >
                    Close
                </button>
                {children}
            </div>
        </div>
    )
}
