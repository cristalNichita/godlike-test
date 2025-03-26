import {useEffect, useState} from "react";

const fields = [
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'developer', label: 'Developer', type: 'text' },
    { name: 'genre', label: 'Genre', type: 'text' },
    { name: 'release_date', label: 'Release Date', type: 'date' },
    { name: 'platform', label: 'Platform', type: 'text' },
    { name: 'price', label: 'Price ($)', type: 'number', step: '0.01' },
    { name: 'cover_image', label: 'Cover Image', type: 'file' },
]

export default function GameForm({initialValues, onSubmit, isEdit = false}) {
    const [formData, setFormData] = useState(initialValues);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files, type } = e.target;
        const newValue = type === 'file' ? files[0] : value;

        setFormData((prev) => ({
            ...prev,
            [name]: newValue
        }));

        if (type === 'file') {
            setPreview(URL.createObjectURL(files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        for (const key in formData) {
            if (key  === 'cover_image') {
                if (formData.cover_image instanceof File) {
                    form.append('cover_image', formData.cover_image);
                }
            } else {
                form.append(key, formData[key]);
            }
        }

        onSubmit(form);
    }

    useEffect(() => {
        if (initialValues.cover_image) {
            setPreview(import.meta.env.VITE_BACKEND_URL + '/storage/' + initialValues.cover_image);
        }
    }, [initialValues]);

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            {fields.map((field) => (
                <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    step={field.step}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                    {...(field.type !== 'file' ? { value: formData[field.name] } : {})}
                    required={field.name !== 'cover_image'}
                />
            ))}

            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="object-cover rounded mb-4"
                />
            )}

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                {isEdit ? 'Update Game' : 'Create Game'}
            </button>
        </form>
    );
}
