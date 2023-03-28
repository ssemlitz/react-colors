import ColorBox from "./ColorBox";

const Palette = (props) => {
  console.log(props)
  const colorBoxes = props.seedColors.colors.map(color => (
    <ColorBox background={color.color} name={color.name}/>
  ))

  return ( 
    <div className="Palette">
      <div className="Palette-colors">
        {colorBoxes}
      </div>
    </div>
  );
}

export default Palette;