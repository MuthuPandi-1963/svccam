/* eslint-disable react/prop-types */
export function Input({ name, type }) {
  return (
    <div className="grid">
      <label htmlFor={name} className="text-2xl font-semibold mb-1">
        {name}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        required
        placeholder={`Enter a ${name}`}
        className="border-2 border-gray-600 p-2 text-xl font-medium mr-2 rounded-md"
      />
    </div>
  );
}

export const Button =({type,name})=>{
    return (
        <button type={type} className="hover:cursor-pointer bg-blue-700 px-4 py-2 rounded-md text-xl font-semibold">{name}</button>
    )
}