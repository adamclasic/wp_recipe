// Registering my block with a unique name


const { registerBlockType } = wp.blocks

const { PanelBody, PanelRow, TextControl, SelectControl } = wp.components;
const { withState } = wp.compose;
const { InspectorControls } = wp.editor;

const MySelectControl = withState( {
    size: '50%',
} )( ( { size, setState } ) => (
    <SelectControl
        label="Size"
        value={ size }
        options={ [
            { label: 'Big', value: '100%' },
            { label: 'Medium', value: '50%' },
            { label: 'Small', value: '25%' },
        ] }
        onChange={ ( size ) => { setState( { size } ) } }
    />
) );

registerBlockType( 'reccpe/ings', {
  title: 'Ings',
  category: 'widgets',
  icon: 'book-alt',
  attributes: {
    name: {
            source: 'text',
            // default: 'my dog'
          },
  },
  edit: ( props ) => {
    return [
      <InspectorControls>

        <PanelBody title={ 'Recipe' }>
          <PanelRow>
            <p>give a title to the recipe.</p>
          </PanelRow>
          <TextControl 
            value= {props.attributes.name}
            help='ex: French Fris'
            onChange= {(newVal) => {
              props.setAttributes({name: newVal})
            }}
          ></TextControl>
          <MySelectControl />
        </PanelBody>

      </InspectorControls>,
    <div>
      <p>name: {props.attributes.name}</p>
      <p>dificulty: </p>
    </div>
    ]
  },
  
  save: ( props ) => {
    return <p>hi im save</p>
  },
  support: {
    html: false,
    className: false,
  }
} );