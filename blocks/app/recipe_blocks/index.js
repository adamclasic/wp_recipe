// Registering my block with a unique name


const { registerBlockType } = wp.blocks

const { PanelBody, PanelRow, TextControl, SelectControl } = wp.components;
const { withState } = wp.compose;
const { InspectorControls, AlignmentToolbar, BlockControls } = wp.editor;

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
    textSide: {
      source: 'text'
    }
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
      <BlockControls>
        <AlignmentToolbar
        value={props.attributes.textSide}
        onChange={(newVall) => {
          props.setAttributes({textSide: newVall})
        }}></AlignmentToolbar>
      </BlockControls>
      <p style={{textAlign: props.attributes.textSide}}>
      name: {props.attributes.name}</p>
      <p style={{color: 'red'}}>dificulty: </p>
    </div>
    ]
  },
  
  save: ( props ) => {
    return <div>
              <p>name: {props.attributes.name}</p>
              <p>dificulty: </p>
            </div>
  },
  support: {
    html: false,
    className: false,
  }
} );
