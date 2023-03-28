const ColorBox = (props) => {
  
  const {background, name} = props
  
  return ( 
    <div style={{background: `${background}`}} className="ColorBox">
      <span >{name}</span>
    </div>
  );
}

export default ColorBox;