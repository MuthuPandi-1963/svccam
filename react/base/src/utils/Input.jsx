export default function InputProp(
    { id, name, type, placeholder, mantatory ,value,onChange}
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
                onChange={onChange}
                placeholder={placeholder} />
        </div>
    )
}
