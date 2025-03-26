import { useEffect, useState } from "react";
import GameService from "../services/GameService";
import PageHeader from "../components/PageHeader";
import GameList from "../components/GameList";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import GameForm from "../components/GameForm";
import GameFilters from "../components/GameFilters";

export default function Home() {
    const [games, setGames] = useState([]);
    const [pagination, setPagination] = useState({current_page: 1});
    const [showModal, setShowModal] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [gameToEdit, setGameToEdit] = useState(null);
    const [filters, setFilters] = useState({ title: '', genre: '', platform: '' });

    const fetchGames = async (page = 1) => {
        try {
            const response = await GameService.getAll(page, filters);
            const { data: games, ...meta } = response.data.data;
            setGames(games);
            setPagination(meta);
        } catch (error) {
            console.error("Error fetching games", error);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Delete this game?")) return;
        await GameService.delete(id);
        fetchGames();
    }

    const handleCreate = async (data) => {
        try {
            await GameService.create(data);
            setShowModal(false);
            fetchGames();
        } catch (error) {
            console.error("Error creating game", error);
            alert("Error creating game");
        }
    }

    const handleEditClick = async (id) => {
        try {
            const response = await GameService.getOne(id);
            setGameToEdit(response.data.data);
            setEditModalOpen(true)
        } catch (error) {
            console.error("Failed to load game for editing", error);
            alert('Failed to load game');
        }
    }

    const handleUpdate = async (data) => {
        try {
            await GameService.update(gameToEdit.id, data);
            setEditModalOpen(false);
            setGameToEdit(null);
            fetchGames(pagination.current_page);
        } catch (error) {
            console.error("Error updating game", error);
            alert('Failed to update game');
        }
    }

    const handleFilter = (newFilters) => {
        setFilters(newFilters);
    }

    useEffect(() => {
        fetchGames(1, filters);
    }, [filters]);

    const initialValues = {
        title: '',
        developer: '',
        genre: '',
        release_date: '',
        platform: '',
        price: '',
        cover_image: null
    };

    return (
        <div className="container mx-auto p-4">
            <PageHeader
                title="Game Catalog"
                buttonLabel="Add New Game"
                onButtonClick={() => setShowModal(true)}
            />
            <GameFilters onFilter={handleFilter} />
            <GameList games={games} onDelete={handleDelete} onEdit={handleEditClick} />
            <Pagination pagination={pagination} onPageChange={fetchGames} />

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            >
                <h2 className="text-xl font-bold mb-4">Add New Game</h2>
                <GameForm
                    initialValues={initialValues}
                    onSubmit={handleCreate}
                />
            </Modal>

            <Modal isOpen={editModalOpen} onClose={() => setEditModalOpen(false)}>
                <h2 className="text-xl font-bold mb-4">Edit Game</h2>
                {gameToEdit && (
                    <GameForm
                        initialValues={gameToEdit}
                        onSubmit={handleUpdate}
                        isEdit={true}
                    />
                )}
            </Modal>
        </div>
    );
}
