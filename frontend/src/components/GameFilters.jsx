import {useState} from "react";

export default function GameFilters({onFilter}) {
    const [filters, setFilters] = useState({
        title: '',
        genre: '',
        platform: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(filters);
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex flex-col md:flex-row gap-4 items-end">
            <input
                type="text"
                name="title"
                value={filters.title}
                onChange={handleChange}
                placeholder="Search by title"
                className="border px-3 py-2 rounded w-full md:w-1/3"
            />

            <input
                type="text"
                name="genre"
                value={filters.genre}
                onChange={handleChange}
                placeholder="Filter by genre"
                className="border px-3 py-2 rounded w-full md:w-1/3"
            />

            <input
                type="text"
                name="platform"
                value={filters.platform}
                onChange={handleChange}
                placeholder="Filter by platform"
                className="border px-3 py-2 rounded w-full md:w-1/3"
            />

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Apply
            </button>
        </form>
    );
}
