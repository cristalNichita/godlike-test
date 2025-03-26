import { useNavigate } from 'react-router-dom';

export default function GameCard({ game, onDelete, onEdit }) {
    const navigate = useNavigate();

    return (
        <div className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{game.title}</h2>
            <p><strong>Developer:</strong> {game.developer}</p>
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Platform:</strong> {game.platform}</p>
            <p><strong>Release Date:</strong> {game.release_date}</p>
            <p><strong>Price:</strong> ${game.price}</p>

            <div className="mt-4 flex gap-2">
                <button
                    onClick={() => onEdit(game.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 cursor-pointer"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(game.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
