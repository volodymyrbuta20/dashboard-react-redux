

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className="rounded-xl py-2 px-4 bg-primary-color text-white text-sm">
            {children}
        </button>
    )
}

export default MyButton;