

const MyModal = ({children, active, setActive}) => {
    return (
        <div 
            className="fixed inset-0 bg-black/[0.5] opacity-1 transition-opacity pointer-events-auto"
            onClick={() => setActive(false)}>
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 bg-white rounded" 
                onClick={(e => e.stopPropagation())}>
                    {children}
            </div>
        </div>
    )
}

export default MyModal;