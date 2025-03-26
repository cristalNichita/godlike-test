import { useNavigate } from 'react-router-dom';

export default function PageHeader({ title, buttonLabel, buttonTo, onButtonClick }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onButtonClick) return onButtonClick();
        if (buttonTo) navigate(buttonTo);
    };

    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{title}</h1>
            {buttonLabel && (
                <button
                    onClick={handleClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {buttonLabel}
                </button>
            )}
        </div>
    );
}
