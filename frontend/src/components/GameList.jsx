import GameCard from './GameCard';

export default function GameList({ games, onDelete, onEdit }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((game) => (
                <GameCard key={game.id} game={game} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    );
}
