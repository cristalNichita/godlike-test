export default function Pagination({pagination, onPageChange}) {
    if (!pagination || pagination.last_page <= 1) return null;

    const { current_page, last_page } = pagination;

    const getPageNumberrs = () => {
        const pages = [];

        for (let i = 1; i <= last_page; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {getPageNumberrs().map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded cursor-pointer ${
                        page === current_page
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
}
