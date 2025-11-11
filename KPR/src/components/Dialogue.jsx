import { useState } from "react";

export default function Dialogue({ dialogue }) {
    const [currentId, setCurrentId] = useState(0);
    const current = dialogue.find((d) => d.id === currentId);

    const handleOptionClick = (nextId) => {
        setCurrentId(nextId);
    };

    return (
        <div>
            <p>{current.question}</p>
            {current.options.length > 0 ? (
                <div>
                    {current.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(option.nextId)}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            ) : (
                <p>
                    Maak een foto en deel het met ons op Instagram. Wie weet delen we jouw foto wel op onze pagina!
                </p>
            )}
        </div>
    );
}
