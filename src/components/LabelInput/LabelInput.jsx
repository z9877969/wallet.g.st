const LabelInput = ({title, type="text", name, value, placeholder="", cbOnChange}) => {
    return (
        <div>
            <label>
                {title}
                <input type={type} name={name} value={value} onChange={cbOnChange} placeholder={placeholder}/>
            </label>
        </div>
    );
}
 
export default LabelInput;