const Button = ({children, className,onClick,onChange,onSubmit }) => {
   return <button onClick={onClick} onChange={onChange} onSubmit={onSubmit} className={`${className} rounded-full px-5 py-2 bg-purple-500 text-white font-semibold shadow-lg hover:bg-purple-600`}>{children}</button>
}

export default Button