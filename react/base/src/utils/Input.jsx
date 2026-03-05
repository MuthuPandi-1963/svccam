export default function InputProp(
    { id, name, type, placeholder, mantatory }
) {
    return (
        <div className="form-input">

            <label htmlFor={id}>
               {mantatory ? <span>*</span>: ""} {name}
            </label>
            <input 
                type={type}
                name={name.toLowerCase()}
                id={id}
                placeholder={placeholder} />
        </div>
    )
}
